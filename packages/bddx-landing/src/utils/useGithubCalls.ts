export const useGithubCalls = () => {
  const getRepositoryBDDX = async () => {
    const response = await fetch(
      "https://api.github.com/repos/aexol-studio/bddx",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseParse = await response.json();
    return responseParse;
  };
  return { getRepositoryBDDX };
};
