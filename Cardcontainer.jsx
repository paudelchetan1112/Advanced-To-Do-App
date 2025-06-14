import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const Cardcontainer=({handleSubmit,mode})=> {
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");
   
  return (
    <Card className={`w-full max-w-xl ${mode==="Dark"?"":"bg-black text-white"}`}>
      <CardHeader>
        <CardTitle>Add Your Task</CardTitle>
        <CardDescription>
         Enter your task below to add new Task
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={()=>Submit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                value={title} onChange={(e)=>setTitle(e.target.value)}
                placeholder="Enter your title"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="description">Description</Label>
              </div>
         <textarea name="Description" value={description} onChange={(e)=>setDescription(e.target.value)
    
         } className="border-2 border-gray-500 rounded-lg" rows="4" id="description" placeholder="Enter the description of your task"></textarea>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" onClick={()=>{handleSubmit(title,description);
             setDescription("");setTitle("")}} className={`w-full cursor-pointer ${mode==="Dark"?" bg-green-700 hover:bg-green-900 ":"bg-white text-black hover:bg-gray-300"}`}>
         Submit
        </Button>
      
      </CardFooter>
    </Card>
  )
}
export default Cardcontainer