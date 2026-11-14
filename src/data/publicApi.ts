const API_URL = (import.meta.env.VITE_API_URL ?? "http://localhost:5001/api")
  .trim()
  .replace(/\/+$/, "");

export async function fetchPublishedContent<T>(collection: string): Promise<T[]> {
  const response = await fetch(`${API_URL}/${collection}`);
  const result: unknown = await response.json().catch(() => undefined);
  if (!response.ok) {
    const message =
      result &&
      typeof result === "object" &&
      "error" in result &&
      typeof result.error === "string"
        ? result.error
        : `Could not load ${collection} (${response.status})`;
    throw new Error(message);
  }
  if (
    !result ||
    typeof result !== "object" ||
    !("data" in result) ||
    !Array.isArray(result.data)
  ) {
    throw new Error(`The API returned an invalid ${collection} response`);
  }
  return result.data as T[];
}
