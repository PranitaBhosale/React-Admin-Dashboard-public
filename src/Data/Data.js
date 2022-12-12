// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilUsersAlt,
    heading: "Add Patient",
  },
  {
    icon: UilClipboardAlt,
    heading: "Modify",
  },
  {
    icon: UilChart,
    heading: 'Delete'
  },
  
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Today's Appointments",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "27",
    png: UilUsdSquare,
    series: [
      {
        name: "Today's Appointments",
        data: [8,12,16,19,22,25,27],
      },
    ],
  },
  {
    title: "Tomorrow's Appointments",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "25",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Tomorrow's Appointments",
        data: [10, 13,15,18,20,23,25],
      },
    ],
  },
  {
    title: "Next Appointments",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "30",
    png: UilClipboardAlt,
    series: [
      {
        name: "Next Appointments",
        data: [10, 12, 15, 17, 20, 25, 30],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "had done his teeth cleaning tratment.",
    time: "25 minutes ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "had done his root canal treatment.",
    time: "2 days ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "had done her Braces/Invisalign treatment.",
    time: "2 days ago",
  },
];
