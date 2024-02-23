import { FC } from "react";

const SearchBar: FC<{ query: string, setQuery: (value: string) => void }> = ({ query, setQuery }): React.ReactNode => {
  const handleChange = (event: any) => {
    return setQuery(event.target.value);
  }
  
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-[500px] w-full flex p-3">
        <div className="w-full h-10 border-blueborder border-4">
          <input value={query} onChange={handleChange} placeholder="Search here...                       "  className="bg-transparent focus:outline-none p-1"/>
        </div>
      </div>
    </div>
    )
}

export default SearchBar;