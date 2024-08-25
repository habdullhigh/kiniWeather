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
                className='sbar rounded-full w-full py-[10px] border-white border-2 pl-3'
                onChange={handleInputChange}
                placeholder="Location"
            />
            <button type="submit" className='rounded-full py-[10px] border-white border-2 px-3 hover:bg-white hover:text-black'>search</button>
        </form>
    );
};

export default SearchBar