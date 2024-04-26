'use client';

import { useState, useMemo } from 'react';
import { ChevronDownIcon, ChevronUpIcon, Search } from 'lucide-react';
import * as Select from '@radix-ui/react-select';
import { Book, NotFound } from "components";


const books = [
    {
        title: "Justified",
        imageUrl: "/assets/images/book1.png",
        author: "Grow Students",
        description: "A 28-Day Devotional about Friendship (for Teenagers)",
        price: "19.00",
        category: "devotional",
        age: 'kids'
    },
    {
        title: "2024 Student Ministry Weekly Planner",
        imageUrl: "/assets/images/book2.png",
        author: "Grow Students",
        description: "For Youth Ministry Leaders",
        price: "9.99",
        category: "coloring",
        age: 'kids'
    },
    {
        title: "Elementary Grow Kids Coloring Book (Volume 7)",
        imageUrl: "/assets/images/book3.png",
        author: "Grow Kids",
        description: "80 Coloring Pages and Activities Inspired by the Bible",
        price: "19.00",
        category: "weekly-planners",
        age: "students"
    },
    {
        title: "Beyond Belief",
        imageUrl: "/assets/images/book4.png",
        author: "Grow Students",
        description: "A 28-Day Devotional about Doubt & Questions (for Teenagers)",
        price: "19.00",
        category: "children",
        age: "adults"
    },
    {
        title: "Enough",
        imageUrl: "/assets/images/book5.png",
        author: "Grow Students",
        description: "A 28-Day Devotional about Your Family (for Teenagers)",
        price: "19.99",
        category: "ministry",
        age: "kids",
    },
    {
        title: "Elementary Grow Kids Coloring Book (Volume 6)",
        imageUrl: "/assets/images/book6.png",
        author: "Grow Kids",
        description: "80 Coloring Pages and Activities inspired by the Bible",
        price: "19.00",
        category: "devotional",
        age: 'adults',
    },
    {
        title: "2024 Kid's Ministry Weekly Planner",
        imageUrl: "/assets/images/book7.png",
        author: "Grow Kids",
        description: "A 28-Day Devotional about Friendship (for Teenagers)",
        price: "19.00",
        category: "coloring",
        age: "students"
    },
    {
        title: "Not Okay",
        imageUrl: "/assets/images/book8.png",
        author: "Grow Students",
        description: "A 28-Day Devotional about Stress & Worry (for Teenagers)",
        price: "19.00",
        category: "weekly-planners",
        age: "adults"
    },
    {
        title: "Cali's World: We Can Shine God's Light",
        imageUrl: "/assets/images/book9.png",
        author: "Grow Kids",
        description: "Short stories about Easter!",
        price: "19.00",
        category: "children",
        age: "students"
    },
    {
        title: "Most Likely To",
        imageUrl: "/assets/images/book10.png",
        author: "Grow Students",
        description: "A 28-Day Devotional about Being a Leader (For Teenagers)",
        price: "19.00",
        category: "ministry",
        age: "adults"
    },
]

const bookCategories = [
    {
        value: 'all',
        label: "All books"
    },
    {
        value: 'devotional',
        label: "Devotional"
    },
    {
        value: 'coloring',
        label: "Coloring books"
    },
    {
        value: 'weekly-planners',
        label: "Weekly planners"
    },
    {
        value: 'children',
        label: "Children books"
    },
    {
        value: 'ministry',
        label: "Ministry books"
    }
]

const agesFilterOptions = [
    {
        value: 'all',
        label: "All ages"
    },
    {
        value: 'kids',
        label: "Kids"
    },
    {
        value: 'students',
        label: "Students"
    },
    {
        value: 'adults',
        label: "Adults"
    },
]

const priceFilterOptions = [
    {
        value: 'all',
        label: "All prices"
    },
    {
        value: '20',
        label: "Under $20"
    },
    {
        value: '10',
        label: "Under $10"
    },
    {
        value: 'free',
        label: "Free"
    },
]

const popularityFilterOptions = [
    {
        value: 'most',
        label: "Most popular"
    },
    {
        value: 'created_at',
        label: "Publication date"
    },
    {
        value: 'low_to_high',
        label: "Price: Low to High"
    },
    {
        value: 'high_to_low',
        label: "Price: High to Low"
    },
]

export const AllBooks = () => {

    const [filteredBook, setFilteredBook] = useState({value: 'all', label: 'All books'});
    const [filteredAge, setFilteredAge] = useState({value: 'all', label: "All ages"});
    const [filteredPrice, setFilteredPrice] = useState({value: 'all', label: "All prices"});
    const [filteredPopularity, setFilteredPopularity] = useState({value: 'most', label: "Most popular"});
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e?.target?.value);
    }

    const handleBookFilter = (newValue) => {
        const getValue = bookCategories.find(item => item.value === newValue);
        setFilteredBook(getValue);
    }

    const handleAgeFilter = (newValue) => {
        const getValue = agesFilterOptions.find(item => item.value === newValue);
        setFilteredAge(getValue);
    }

    const handlePriceFilter = (newValue) => {
        const getValue = priceFilterOptions.find(item => item.value === newValue);
        setFilteredPrice(getValue);
    }

    const handlePopularityFilter = (newValue) => {
        const getValue = popularityFilterOptions.find(item => item.value === newValue);
        setFilteredPopularity(getValue);
    }

    const filteredBooks = useMemo(() => {

        let filteredByBooks;
        let filteredByAge;
        let filteredByPrice;

        if (filteredBook.value === "all") {
            filteredByBooks = books;
        } else {
            filteredByBooks = books.filter((book) => book.category === filteredBook.value);
        }


        if (filteredAge.value === 'all') {
            filteredByAge =  filteredByBooks;
        } else {
            filteredByAge =  filteredByBooks.filter((book) => book.age === filteredAge.value);
        }

        if(filteredPrice.value === 'all') {
            filteredByPrice = filteredByAge;
        } else if (filteredPrice.value === 'free') {
            filteredByPrice = filteredByAge.filter((book) => book.price === 0);
        }   else {
            filteredByPrice = filteredByAge.filter((book) => book.price < filteredPrice.value);
        }

        return search ? filteredByPrice.filter((book) => book.title.toLowerCase().includes(search.toLowerCase())) : filteredByPrice;

    },[filteredAge.value, filteredBook.value, filteredPrice.value, search]);

    return (
        <div className="flex flex-wrap -mx-4">
            <div className="flex w-full justify-between items-center px-4">
                <div className='flex flex-1 items-center space-x-4'>
                    <div className='flex items-center space-x-4'>
                        <Select.Root value={filteredBook.value} onValueChange={handleBookFilter} className="relative">
                            <Select.Trigger className="inline-flex items-center focus:outline-none py-2 px-3 border border-[#E6E8EC] bg-white rounded-md text-sm text-[#1A2849] font-sans font-normal">
                                <Select.Value placeholder="All books" />
                                <Select.Icon className="text-[#1A2849] ml-2">
                                    <ChevronDownIcon size={18} />
                                </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                                <Select.Content side='bottom' align='start' position='popper' className="border top-full border-[#E0E0E0] bg-white rounded-lg w-[200px] mt-2">
                                    <Select.ScrollUpButton className="SelectScrollButton">
                                    <ChevronUpIcon />
                                    </Select.ScrollUpButton>
                                    <Select.Viewport className="SelectViewport">
                                        {bookCategories?.length && bookCategories.map((item, index) => {
                                            return (
                                                <Select.Item key={item.value} value={item.value} className={`w-full p-3 text-[#1A2849] text-sm font-sans border-none outline-none font-normal hover:bg-[#F2F3F5] hover:outline-none hover:border-none ${index === 0 || (index + 1) === bookCategories.length ? "rounded-tr-lg rounded-tl-lg" : ""} ${filteredBook.value === item.value ? "bg-[#F2F3F5]" : ""}`}>
                                                    <Select.ItemText>{item.label}</Select.ItemText>
                                                </Select.Item>
                                            )
                                        })}
                                    </Select.Viewport>
                                    <Select.ScrollDownButton className="SelectScrollButton">
                                        <ChevronDownIcon />
                                    </Select.ScrollDownButton>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                        <Select.Root value={filteredAge.value} onValueChange={handleAgeFilter} className="relative">
                            <Select.Trigger className="inline-flex items-center focus:outline-none py-2 px-3 border border-[#E6E8EC] bg-white rounded-md text-sm text-[#1A2849] font-sans font-normal">
                                <Select.Value>
                                    {`For: ${filteredAge.label}`}
                                </Select.Value>
                                <Select.Icon className="text-[#1A2849] ml-2">
                                    <ChevronDownIcon size={18} />
                                </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                                <Select.Content side='bottom' align='start' position='popper' className="border top-full border-[#E0E0E0] bg-white rounded-lg w-[200px] mt-2">
                                    <Select.ScrollUpButton className="SelectScrollButton">
                                    <ChevronUpIcon />
                                    </Select.ScrollUpButton>
                                    <Select.Viewport className="SelectViewport">
                                    {agesFilterOptions?.length && agesFilterOptions.map((item, index) => {
                                            return (
                                                <Select.Item key={item.value} value={item.value} className={`w-full p-3 text-[#1A2849] text-sm font-sans border-none outline-none font-normal hover:bg-[#F2F3F5] hover:outline-none hover:border-none ${index === 0 || (index + 1) === agesFilterOptions.length ? "rounded-tr-lg rounded-tl-lg" : ""} ${filteredAge.value === item.value ? "bg-[#F2F3F5]" : ""}`}>
                                                    <Select.ItemText>{item.label}</Select.ItemText>
                                                </Select.Item>
                                            )
                                        })}
                                    </Select.Viewport>
                                    <Select.ScrollDownButton className="SelectScrollButton">
                                        <ChevronDownIcon />
                                    </Select.ScrollDownButton>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                        <Select.Root value={filteredPrice.value} onValueChange={handlePriceFilter} className="relative">
                            <Select.Trigger className="inline-flex items-center focus:outline-none py-2 px-3 border border-[#E6E8EC] bg-white rounded-md text-sm text-[#1A2849] font-sans font-normal">
                                <Select.Value>
                                    {`Price: ${filteredPrice.label}`}
                                </Select.Value>
                                <Select.Icon className="text-[#1A2849] ml-2">
                                    <ChevronDownIcon size={18} />
                                </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                                <Select.Content side='bottom' align='start' position='popper' className="border top-full border-[#E0E0E0] bg-white rounded-lg w-[200px] mt-2">
                                    <Select.ScrollUpButton className="SelectScrollButton">
                                    <ChevronUpIcon />
                                    </Select.ScrollUpButton>
                                    <Select.Viewport className="SelectViewport">
                                    {priceFilterOptions?.length && priceFilterOptions.map((item, index) => {
                                            return (
                                                <Select.Item key={item.value} value={item.value} className={`w-full p-3 text-[#1A2849] text-sm font-sans border-none outline-none font-normal hover:bg-[#F2F3F5] hover:outline-none hover:border-none ${index === 0 || (index + 1) === priceFilterOptions.length ? "rounded-tr-lg rounded-tl-lg" : ""} ${filteredPrice.value === item.value ? "bg-[#F2F3F5]" : ""}`}>
                                                    <Select.ItemText>{item.label}</Select.ItemText>
                                                </Select.Item>
                                            )
                                        })}
                                    </Select.Viewport>
                                    <Select.ScrollDownButton className="SelectScrollButton">
                                        <ChevronDownIcon />
                                    </Select.ScrollDownButton>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                        <Select.Root value={filteredPopularity.value} onValueChange={handlePopularityFilter} className="relative">
                            <Select.Trigger className="inline-flex items-center focus:outline-none py-2 px-3 border border-[#E6E8EC] bg-white rounded-md text-sm text-[#1A2849] font-sans font-normal">
                                <Select.Value>
                                    {`Sort by: ${filteredPopularity.label}`}
                                </Select.Value>
                                <Select.Icon className="text-[#1A2849] ml-2">
                                    <ChevronDownIcon size={18} />
                                </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                                <Select.Content side='bottom' align='start' position='popper' className="border top-full border-[#E0E0E0] bg-white rounded-lg w-[200px] mt-2">
                                    <Select.ScrollUpButton className="SelectScrollButton">
                                    <ChevronUpIcon />
                                    </Select.ScrollUpButton>
                                    <Select.Viewport className="SelectViewport">
                                    {popularityFilterOptions?.length && popularityFilterOptions.map((item, index) => {
                                            return (
                                                <Select.Item key={item.value} value={item.value} className={`w-full p-3 text-[#1A2849] text-sm font-sans border-none outline-none font-normal hover:bg-[#F2F3F5] hover:outline-none hover:border-none ${index === 0 || (index + 1) === popularityFilterOptions.length ? "rounded-tr-lg rounded-tl-lg" : ""} ${filteredPopularity.value === item.value ? "bg-[#F2F3F5]" : ""}`}>
                                                    <Select.ItemText>{item.label}</Select.ItemText>
                                                </Select.Item>
                                            )
                                        })}
                                    </Select.Viewport>
                                    <Select.ScrollDownButton className="SelectScrollButton">
                                        <ChevronDownIcon />
                                    </Select.ScrollDownButton>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                    </div>
                    <p className={`${filteredBooks?.length < 1 ? "text-[#FF6565]" : "text-[#091D37]"} text-[14px] font-medium leading-snug font-sans`}>Displaying {filteredBooks?.length} books</p>
                </div>
                <div className="inline-flex relative w-[300px] pl-4 pr-12 py-2 rounded border border-[#E6E8EC]">
                    <input type="search" placeholder="Search..." value={search} onChange={handleSearch} className='h-6 w-full focus-within:outline-none border-none font-sans' />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2">
                        <Search size={20} />
                    </span>
                </div>
            </div>
            {filteredBooks?.length ? filteredBooks.map((book, index) => {
                return <Book key={index} {...book} />
            }) : <div className='flex items-center justify-center h-[500px] w-full'><NotFound /></div>}
        </div>
    )
}