import React, { useState, useEffect } from "react";
import { Button, Divider } from "../";
import { SelectPage } from './selectPage'
import { cn } from "@/lib/utils";



export const Modal = ({ className, ...props }) => {
  const [pages, setPages] = useState([
    { id: 1, label: "Page 1", checked: false },
    { id: 2, label: "Page 2", checked: false },
    { id: 3, label: "Page 3", checked: false },
    { id: 4, label: "Page 4", checked: false },
  ]);
  
  const [allPagesChecked, setAllPagesChecked] = useState(false);
  const isAnyPageSelected = pages.some(page => page.checked) || allPagesChecked;

  
  // Update "All pages" checkbox when individual pages change
  useEffect(() => {
    const allChecked = pages.every(page => page.checked);
    setAllPagesChecked(allChecked);
  }, [pages]);
  
  // Handle "All pages" checkbox change
  const handleAllPagesChange = (checked) => {
    setAllPagesChecked(checked);
    setPages(pages.map(page => ({ ...page, checked })));
  };
  
  // Handle individual page checkbox change
  const handlePageChange = (id, checked) => {
    setPages(pages.map(page => 
      page.id === id ? { ...page, checked } : page
    ));
  };
  

  
  return (
    <div className="">
      <div 
        className={cn(
          "w-full h-full rounded-md border  border-[#EEEEEE] bg-white shadow-[0px_8px_15px_0px_#1414141F,0px_0px_4px_0px_#1414141A] py-6",
          className
        )}
        {...props}
      >
        {/* All Pages Checkbox */}
        <SelectPage 
          label="All pages"
          checked={allPagesChecked}
          onCheckedChange={handleAllPagesChange}
        />
        
        <Divider />
        
        {/* Individual Page Checkboxes */}
        <div className="max-h-[180px] overflow-y-auto">
          {pages.map(page => (
            <SelectPage 
              key={page.id}
              label={page.label}
              checked={page.checked}
              onCheckedChange={(checked) => handlePageChange(page.id, checked)}
            />
          ))}
        </div>
        
        <Divider />
        
        {/* Single Done Button */}
        <div className="flex justify-end px-[15px] pt-[10px]">
          <Button
             variant={isAnyPageSelected ? "default" : "secondary"}
            disabled={!isAnyPageSelected}
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};


