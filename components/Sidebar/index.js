import React from "react";

const Sidebar = () => {
  return (
    <section
      class="absolute inset-y-0 right-0 pl-10 max-w-full flex bg-gray-500 bg-opacity-75 "
      aria-labelledby="slide-over-heading"
    >
      <div class="relative w-screen max-w-md">
        <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
          <div class="px-4 sm:px-6">
            <h2
              id="slide-over-heading"
              class="text-lg font-medium text-gray-900"
            >
              Organization
            </h2>
          </div>
          <div class="px-4 sm:px-6">
           <span class=""><input type="text"></input></span>
           <span class=""><button>Add</button></span>
          </div>
          <div class="mt-6 relative flex-1 px-4 sm:px-6">
            <div class="absolute inset-0 px-4 sm:px-6">
              <div
                class="h-full border-2 border-dashed border-gray-200"
                aria-hidden="true"
              >
                  <p class="p-3"><span class="float-left"><i class="fa fa-times" aria-hidden="true"></i></span> <p class="px-4">ORGANIZATION NAME</p> </p>
                  <p class="p-3"><span class="float-left"><i class="fa fa-times" aria-hidden="true"></i></span> <p class="px-4">ORGANIZATION NAME</p> </p>
                  <p class="p-3"><span class="float-left"><i class="fa fa-times" aria-hidden="true"></i></span> <p class="px-4">ORGANIZATION NAME</p> </p>
                  <p class="p-3"><span class="float-left"><i class="fa fa-times" aria-hidden="true"></i></span> <p class="px-4">ORGANIZATION NAME</p> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
