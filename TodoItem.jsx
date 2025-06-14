import React from "react";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./components/ui/Card";
import { Button } from "@/components/ui/button";
const TodoItem = ({btn, mode,task,title, description, handleDelete}) => {
  return (
    <>
    {btn?(
    <div className=" mx-auto w-full max-w-xl m-3" >
      <Card className={` ${mode==="Dark"?"bg-white":"bg-gray-950 text-white"}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full justify-between mx-auto flex">
          
            <Button
              type="submit"
              className={` ${mode==="Dark"?"bg-red-500 hover:bg-red-800 cursor-pointer text-white":"bg-white text-black hover:bg-gray-300"}`}
              onClick={() =>handleDelete(task)}
            >
          Delete
            </Button>
                      <div>
<label className="text-gray-600 font-mono text-xs" htmlFor="completetask">Check the box after completing the task</label>
            <input type="checkbox"className="scale-150 mx-3" name="taskcomplete" id="checkbox" />
          </div>
          </div>

        </CardContent>
      </Card>
    </div>
    ) : <div className=" mx-auto w-full max-w-xl m-3" >
      <Card className={`${mode == "Dark" ? "" : "bg-gray-900 text-white"}`}>

        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent></CardContent></Card></div>
}
</>
  );
};

export default TodoItem;
