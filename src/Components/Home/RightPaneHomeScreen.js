import React from "react";
import { FcOpenedFolder } from "react-icons/fc";
import { BiEditAlt } from "react-icons/bi";
import { IoTrashOutline } from "react-icons/io5";
import Card from "../Card";

function RightPaneHomeScreen() {
  return (
    <div className="border-2 border-black h-screen p-8">
      <div className="flex justify-between items-center">
        <h2>
          My <span className="font-semibold text-2xl">PlayGroud</span>
        </h2>
        <h4>
          <span className="font-semibold text-2xl">+</span> New Folder
        </h4>
      </div>
      <hr className="mb-12 mt-4 bg-black" />
      <div className="flex flex-col my-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <FcOpenedFolder size={"2em"} />
            <h3 className="font-semibold">DSA</h3>
          </div>
          <div className="flex gap-4 items-center">
            <BiEditAlt size={"1.5em"} />
            <IoTrashOutline size={"1.5em"} />
            <h4 className="font-semibold">
              <span className="font-semibold text-2xl">+</span> New PlayGroud
            </h4>
          </div>
        </div>
      </div>
      <hr className="mb-12 mt-4 bg-black" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
            <div className="flex items-center justify-between">
                <div className="flex gap-4">
                    <img src="/logo-small.png" alt="logo" />
                    <div>
                        <h4>Stack implementation</h4>
                        <h4>Language.cpp</h4>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <BiEditAlt size={"1.5em"} />
                    <IoTrashOutline size={"1.5em"} />
                </div>
            </div>
        </Card>
        <Card>
            <div className="flex items-center justify-between">
                <div className="flex gap-4">
                    <img src="/logo-small.png" alt="logo" />
                    <div>
                        <h4>Stack implementation</h4>
                        <h4>Language.cpp</h4>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <BiEditAlt size={"1.5em"} />
                    <IoTrashOutline size={"1.5em"} />
                </div>
            </div>
        </Card>
      </div>
    </div>
  );
}

export default RightPaneHomeScreen;
