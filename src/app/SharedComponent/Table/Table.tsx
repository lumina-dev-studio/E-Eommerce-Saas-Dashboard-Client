"use client"

import React, { useState } from "react";
import SearchBar from '../SearchBar/SearchBar';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BsCupHot } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import Pagination from "../Pagination/Pagination";
import Divider from "../Divider/Divider";
import Link from "next/link";
import TableList from "./TableList";
const Table = ({tableHead,tableData}:any) => {
  // State to manage the selected value
  const [selectedValue, setSelectedValue] = useState("10"); // Default value is set to "10"

  

  return (
    <div className=' bg-white p-7 rounded-xl mt-5'>

        <section className=" flex gap-3 items-center mb-5">
            <div>
            <BsCupHot className=" text-blue-500 text-[20px] font-bold" />

            </div>
            <p className="text-gray-500  text-[15px] font-normal" style={{ fontFamily: 'var(--font-inter)' }}>
            Tip search by Product ID: Each product is provided with a unique ID, which you can rely on to find the exact product you need.</p>
        </section>
      <section className='grid grid-cols-12'>
        <div className=" flex gap-3 items-center col-span-2">
         
        <p className='text-[12px] text-gray-400 font-normal mt-2' style={{ fontFamily: 'var(--font-inter)' }}>Showing</p>
          <Select name="number" value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
            <SelectTrigger id="framework" className="rounded-xl  font-normal w-[70px] border border-gray-200 shadow-none h-[30px] mt-2">
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
            </SelectContent>
          </Select>

          <p className='text-[12px] text-gray-400 font-normal mt-2' style={{ fontFamily: 'var(--font-inter)' }}>entries</p>
        </div>
        
        <div className=" col-span-7  ">
          <div className=" w-[70%] ">
          <SearchBar />
          </div>
        </div>
        
        <div className=" flex justify-end col-span-3">
          <Link href={'/ecommerce'}
            className="w-[210px] h-[50px]  py-3 font-bold text-blue-600 text-[14px] bg-white hover:text-white hover:bg-blue-600 rounded-lg border-blue-600 border hover:border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <div className=" flex gap-2 items-center"><FiPlus className=" text-[20px]" /> <p> Add new</p>
            
            </div>
          </Link>
        </div>
      </section>

      <section className=" my-10">
      <TableList tableHead={tableHead}tableData={tableData}  />
      </section>

      <section >
    <Divider/>
      <div className=" flex justify-between mt-6 mb-2">
      <p className='text-[12px] text-gray-400 font-normal mt-2' style={{ fontFamily: 'var(--font-inter)' }}>Showing 10 entries</p>
      <Pagination/>
      </div>
       
      </section>
    </div>
  );
};

export default Table;