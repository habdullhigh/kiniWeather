import React, {useState} from 'react'

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form className='flex gap-x-3' onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchTerm}
                className='sbar text-black rounded-full w-full py-[10px] border-white pl-6'
                onChange={handleInputChange}
                placeholder="Search for cities....."
            />
            <button type="submit" className='rounded-full py-[10px] border-[#AEB5CD] border-2 px-3 hover:bg-white hover:text-black'>search</button>
        </form>
    );
};

export default SearchBar