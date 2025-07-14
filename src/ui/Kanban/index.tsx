"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Replace with your button component if needed

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("black");

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg"
            alt="Product"
            className="w-full object-cover rounded-xl"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Elegant Leather Backpack
            </h1>
            <p className="text-muted-foreground">
              Designed for both style and durability, this leather backpack
              suits any occasion — from the office to weekend getaways.
            </p>
          </div>

          <div className="text-xl font-semibold text-primary">$129.00</div>

          {/* Color Selector */}
          <div>
            <h4 className="text-sm font-medium mb-1">Color</h4>
            <div className="flex gap-2">
              {["black", "brown", "gray"].map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-primary ring-2 ring-primary/50"
                      : "border-muted"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Actions */}
          <Button className="mt-4 w-full sm:w-auto">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
