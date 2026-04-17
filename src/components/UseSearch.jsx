import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function UseSearch(paramsName) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get(paramsName) || "");

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set(paramsName, search);
    } 
    else {
      params.delete(paramsName);
    }

    setSearchParams(params);
  }, [search, searchParams, paramsName, setSearchParams]);

  return {search, setSearch, handleSearch}
}
