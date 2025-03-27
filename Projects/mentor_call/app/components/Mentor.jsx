import { profile } from "../data/Profiles";
import { Search } from "lucide-react";
import { ProfileCard } from "./ProfileCard";
import { useState, useRef, useEffect } from "react";

export const Mentor = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredResults, setFilteredResults] = useState(["Google", "Amazon", "Apple"]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }

    }

      document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    setDropdownVisible(value.length > 0); 
  };

  return (
    <>
      {/* Header */}
      <div className="bg-[#DBEAFE] w-full mx-auto py-4 flex justify-between">
        <div className="w-[85%] flex justify-between items-center mx-auto">
          <p className="text-3xl">Mentors</p>
          <div className="p-1 bg-white border font-semibold text-gray-700 border-gray-200 shadow-sm rounded-lg px-5 cursor-pointer">
            Become Mentor
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-[85%] flex justify-between items-center py-6 mx-auto">
        <div
          ref={searchRef}
          className="bg-[#EBEFF4] relative group gap-3 px-6 rounded-lg p-2 w-[40%] flex items-center 
            border border-transparent focus-within:border-gray-300"
        >
          <Search size={18} className="text-gray-500" />
          <input
            className="w-full bg-transparent outline-none text-gray-700"
            placeholder="Search by name"
            value={searchText}
            onChange={handleSearch}
            onFocus={() => setDropdownVisible(true)}
          />
          {isDropdownVisible && filteredResults.length > 0 && (
            <div className="absolute top-full left-0 w-full z-20 bg-gray-100 rounded-md shadow-md mt-1">
              {filteredResults.map((el, i) => (
                <p className="px-3 py-2 hover:bg-gray-200 cursor-pointer" key={i}>
                  {el}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-7">
          <select className="text-gray-600 border border-gray-300 font-semibold p-2 rounded-lg" name="Role">
            <option value="SE/SDE">SE/SDE</option>
            <option value="DS/AI/ML">DS/AI/ML</option>
            <option value="Consulting">Consulting</option>
          </select>
          <select className="text-gray-600 border border-gray-300 font-semibold p-2 rounded-lg" name="Company">
            <option value="FAANG">FAANG</option>
            <option value="Startup">Startup</option>
            <option value="MNC's">MNC's</option>
            <option value="Apple">Apple</option>
          </select>
          <select className="text-gray-600 border border-gray-300 font-semibold p-2 rounded-lg" name="Slot">
            <option value="This Week">This week</option>
            <option value="This Month">This month</option>
            <option value="Anytime">Anytime</option>
          </select>
          <select className="text-gray-600 border border-gray-300 font-semibold p-2 rounded-lg" name="Rating">
            <option value="Low to high">Low to high</option>
            <option value="High to low">High to low</option>
          </select>
        </div>
      </div>

      {/* Mentor Profiles */}
      <div className="w-[85%] mx-auto">
        <div className="flex flex-col gap-4">
          {profile.map((el) => (
            <ProfileCard data={el} key={el.id} />
          ))}
        </div>
      </div>
    </>
  );
};
