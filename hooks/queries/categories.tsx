import { useQuery } from "@tanstack/react-query";
import { ICategory } from "@/types/category/ICategory";
import api from "@/service/api/api";

const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {

      const data = await api.get("/api/Auth/find?phone=string");
      return data as unknown as ICategory[];
    },
  });
};

export default useCategories;