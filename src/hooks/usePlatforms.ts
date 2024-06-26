import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platformData from "../data/platform";
import APIClient from "../services/api-client";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platformData,
  });

export default usePlatforms;
