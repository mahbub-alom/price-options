import axios from "axios";
import React from "react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  axios
    .get("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then((data) => {
      const phoneData = data.data.data;
      const phoneWithFakeData = phoneData.map((phone) => {
        const obj = {
          name: phone.phone_name,
          price: parseInt(phone.slug.split("-")[1]),
        };
        return obj;
      });
      console.log(phoneWithFakeData);
      setPhones(phoneWithFakeData);
    });

  return (
    <div>
      <h2>Phones: {phones.length}</h2>
      <BarChart width={730} height={250} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Phones;
