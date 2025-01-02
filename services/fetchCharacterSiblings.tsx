export const fetchCharacterSiblings = async (characterName: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY;

  if (!baseUrl || !clientKey) {
    throw new Error("API base URL or client key is not defined");
  }

  const response = await fetch(
    `${baseUrl}/characters/${characterName}/siblings`,
    {
      method: "GET",
      headers: {
        Authorization: `bearer ${clientKey}`,
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to fetch character siblings.");
  }

  return response.json();
};
