"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";

type Department = {
  name: string;
  count: number;
};

type Position = {
  id: number;
  title: string;
  type: string;
  location: string;
  description: string;
};

const departments: Department[] = [
  { name: "Engineering", count: 3 },
  { name: "Writer", count: 2 },
  { name: "Grow", count: 1 },
  { name: "SEO", count: 1 },
];

const positions: Position[] = [
  {
    id: 1,
    title: "SEO Manager",
    type: "Full Time",
    location: "Remote",
    description:
      "Joining the Juristo team means becoming part of a dynamic group of individuals passionate about redefining the future of legal solutions. At Juristo, we value innovation, collaboration, and a drive for excellence.",
  },
  {
    id: 2,
    title: "SEO Manager",
    type: "Full Time",
    location: "Remote",
    description:
      "Joining the Juristo team means becoming part of a dynamic group of individuals passionate about redefining the future of legal solutions. At Juristo, we value innovation, collaboration, and a drive for excellence.",
  },
  // Add more positions as needed
];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const totalPositions = departments.reduce((sum, dept) => sum + dept.count, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Join the team
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              Joining the Juristo team means becoming part of a dynamic group of
              individuals passionate about redefining the future of legal
              solutions. At Juristo, we value innovation, collaboration, and a
              drive for excellence. Join us in creating solutions where your
              ideas can make a real impact.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Open positions
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
              <Image
                src="https://i.postimg.cc/v84NStmN/jlogo.png"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              {/* Floating Avatars */}
              <Avatar className="absolute -top-4 -right-4 w-8 h-8 border-2 border-white">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Avatar className="absolute top-1/4 -right-8 w-8 h-8 border-2 border-white">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <Avatar className="absolute bottom-1/4 -right-6 w-8 h-8 border-2 border-white">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <Avatar className="absolute -bottom-4 right-1/4 w-8 h-8 border-2 border-white">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <div className="absolute -right-2 top-1/2 w-2 h-2 rounded-full bg-blue-400"></div>
              <div className="absolute -right-4 bottom-1/3 w-2 h-2 rounded-full bg-green-400"></div>
              <div className="absolute right-1/4 -top-2 w-2 h-2 rounded-full bg-red-400"></div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mt-16 sm:mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
            We have {totalPositions.toString().padStart(2, "0")} open positions
            now!
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
            {/* Filters */}
            <div className="w-64 space-y-8">
              <div>
                <h3 className="font-semibold mb-4">
                  All positions ({totalPositions})
                </h3>
                <div className="space-y-2">
                  {departments.map((dept) => (
                    <button
                      key={dept.name}
                      onClick={() => setSelectedDepartment(dept.name)}
                      className={`flex items-center justify-between w-full px-2 py-1 rounded text-left ${
                        selectedDepartment === dept.name ? "bg-gray-100" : ""
                      }`}
                    >
                      <span className="text-sm">{dept.name}</span>
                      <span className="text-sm text-gray-500">
                        ({dept.count})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">All Roles</h3>
                <div className="space-y-2">
                  {["Full Time", "Internship", "Part Time"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`text-sm w-full text-left px-2 py-1 rounded ${
                        selectedType === type ? "bg-gray-100" : ""
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="flex-1 space-y-6">
              {positions.map((position) => (
                <div key={position.id} className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {position.title}
                      </h3>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{position.location}</Badge>
                        <Badge variant="secondary">{position.type}</Badge>
                      </div>
                    </div>
                    <Button className="bg-black text-white hover:bg-gray-800">
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-gray-600">{position.description}</p>
                </div>
              ))}

              <Button variant="outline" className="w-full">
                Show more...
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
