import { useState, useEffect } from "react";

type FilterFn<T> = (item: T, query: T) => boolean;

export function useFilter<T>(
  originalData: T[],
  filterFn: FilterFn<T>,
  query: T
) {
  const [filteredData, setFilteredData] = useState<T[]>(originalData);

  useEffect(() => {
    const result = originalData.filter((item) => filterFn(item, query));
    setFilteredData(result);
  }, [query, originalData, filterFn]);
  return filteredData;
}
