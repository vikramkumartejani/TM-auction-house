"use client";
import { useState } from "react";
import { EllipsisVertical, Search, Upload } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import { FaChevronDown } from "react-icons/fa6";

const orders = [
  {
    id: "#2633",
    product: {
      name: "2018 Rolex Sky-Dweller",
      image: "/placeholder.svg?height=60&width=60",
    },
    payment: "Not submitted",
    date: "Aug 20, 2024",
    phone: "(400) 555-0120",
    status: "Pending",
  },
  {
    id: "#2634",
    product: {
      name: "2023 Uwerk UR-100V Ultraviolet",
      image: "/placeholder.svg?height=60&width=60",
    },
    payment: "Not submitted",
    date: "Aug 19, 2024",
    phone: "(480) 555-0103",
    status: "Pending",
  },
  {
    id: "#2635",
    product: {
      name: "Omega Seamaster Diver 300M",
      image: "/placeholder.svg?height=60&width=60",
    },
    payment: "Paid",
    date: "Aug 18, 2024",
    phone: "(500) 555-0160",
    status: "Shipped",
  },
  {
    id: "#2636",
    product: {
      name: "2022 Audemars Piguet Royal Oak",
      image: "/placeholder.svg?height=60&width=60",
    },
    payment: "Pending",
    date: "Aug 15, 2024",
    phone: "(600) 555-0180",
    status: "In Transit",
  },
  {
    id: "#2637",
    product: {
      name: "Patek Philippe Nautilus",
      image: "/placeholder.svg?height=60&width=60",
    },
    payment: "Paid",
    date: "Aug 14, 2024",
    phone: "(700) 555-0200",
    status: "Delivered",
  },
];

export default function BidHistory() {
  const [activeTab, setActiveTab] = useState("auctions");
  const [searchQuery, setSearchQuery] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("");
  const [orderFilter, setOrderFilter] = useState("");
  const [shipmentFilter, setShipmentFilter] = useState("");

  // Filtering function for orders
  const filteredOrders = orders.filter((order) => {
    // Search filter
    const matchesSearchQuery =
      order.product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase());

    // Payment status filter
    const matchesPaymentFilter =
      paymentFilter === "" ||
      order.payment.toLowerCase() === paymentFilter.toLowerCase();

    // Order status filter
    const matchesOrderFilter =
      orderFilter === "" ||
      order.status.toLowerCase() === orderFilter.toLowerCase();

    // Shipment status filter
    const matchesShipmentFilter =
      shipmentFilter === "" ||
      order.status.toLowerCase() === shipmentFilter.toLowerCase();

    // Return true if all filters match
    return (
      matchesSearchQuery &&
      matchesPaymentFilter &&
      matchesOrderFilter &&
      matchesShipmentFilter
    );
  });

  return (
    <DashboardLayout>
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-[32px] text-white">Bidding History</h1>
            <p className="text-[#CBAD7E] text-[16px]">
              View all your past bids and track your progress in the auction
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("auctions")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  activeTab === "auctions"
                    ? "bg-[#FFE9C2] text-[#0B0A0A]"
                    : "bg-[#0B4447] text-white"
                }`}
              >
                Auctions
              </button>
              <button
                onClick={() => setActiveTab("listings")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  activeTab === "listings"
                    ? "bg-[#FFE9C2] text-[#0B0A0A]"
                    : "bg-[#0B4447] text-white"
                }`}
              >
                Listings
              </button>
            </div>

            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0B4447] text-white rounded-full pl-10 pr-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFE9C2]"
              />
            </div>

            <div className="flex gap-2">
              {/* Payment Status Dropdown */}
              <div className="relative">
                <select
                  value={paymentFilter}
                  onChange={(e) => setPaymentFilter(e.target.value)}
                  className="appearance-none px-4 min-w-40 py-2 flex items-center gap-2 bg-[#0B4447] text-white rounded-full text-sm font-medium hover:bg-[#0B4447]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFE9C2]"
                >
                  <option value="" disabled>
                    Payment Status
                  </option>
                  {["Paid", "Pending", "Not Submitted"].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <FaChevronDown
                  className="absolute right-3 top-[45%] -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={15}
                />
              </div>

              {/* Order Status Dropdown */}
              <div className="relative">
                <select
                  value={orderFilter}
                  onChange={(e) => setOrderFilter(e.target.value)}
                  className="appearance-none px-4 min-w-40 py-2 flex items-center gap-2 bg-[#0B4447] text-white rounded-full text-sm font-medium hover:bg-[#0B4447]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFE9C2]"
                >
                  <option value="" disabled>
                    Order Status
                  </option>
                  {["Processed", "Pending", "Cancelled"].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <FaChevronDown
                  className="absolute right-3 top-[45%] -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={15}
                />
              </div>

              {/* Shipment Status Dropdown */}
              <div className="relative">
                <select
                  value={shipmentFilter}
                  onChange={(e) => setShipmentFilter(e.target.value)}
                  className="appearance-none px-4 min-w-40 py-2 flex items-center gap-2 bg-[#0B4447] text-white rounded-full text-sm font-medium hover:bg-[#0B4447]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFE9C2]"
                >
                  <option value="" disabled>
                    Shipment Status
                  </option>
                  {["Shipped", "In Transit", "Delivered"].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <FaChevronDown
                  className="absolute right-3 top-[45%] -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={15}
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 text-[#1b787d] font-medium">
                    Order ID
                  </th>
                  <th className="text-left p-4 text-[#1b787d] font-medium">
                    Product
                  </th>
                  <th className="text-left p-4 text-[#1b787d] font-medium">
                    Payment
                  </th>
                  <th className="text-left p-4 text-[#1b787d] font-medium">
                    Proof of Payment
                  </th>
                  <th className="text-left p-4 text-[#1b787d] font-medium">
                    Date
                  </th>
                  <th className="text-left p-4 text-[#1b787d] font-medium">
                    Phone Number
                  </th>
                  <th className="text-left p-4 text-[#1b787d] font-medium">
                    Shipment
                  </th>
                  <th className="text-left p-4 text-[#1b787d] font-medium"></th>
                </tr>
              </thead>
              <tbody className="bg-[#111B1B]">
                {filteredOrders.map((order, index) => (
                  <tr
                    key={index}
                    className="rounded-lg mt-2 hover:bg-[#0B4447]/30"
                  >
                    <td className="p-4 text-white">{order.id}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={order.product.image}
                          alt={order.product.name}
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                        <span className="text-white">{order.product.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-2 rounded-full bg-[#FFE6E9] text-red-500 text-sm">
                        {order.payment}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B4447] text-white text-sm hover:bg-[#0B4447]/80 transition-colors">
                        <Upload className="h-4 w-4" />
                        Upload
                      </button>
                    </td>
                    <td className="p-4 text-white">{order.date}</td>
                    <td className="p-4 text-white">{order.phone}</td>
                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full bg-[#FFE6E9] text-red-500 text-sm">
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="p-2 hover:bg-[#0B4447] rounded-lg transition-colors group">
                        <EllipsisVertical className="h-5 w-5 text-white" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
