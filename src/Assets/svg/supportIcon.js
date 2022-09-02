import React from "react";



const supportIconActive=()=>{
  
    return(
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
        <path d="M18 19.36H17.24C16.44 19.36 15.68 19.67 15.12 20.23L13.41 21.92C12.63 22.69 11.36 22.69 10.58 21.92L8.87 20.23C8.31 19.67 7.54 19.36 6.75 19.36H6C4.34 19.36 3 18.03 3 16.39V5.47998C3 3.83998 4.34 2.51001 6 2.51001H18C19.66 2.51001 21 3.83998 21 5.47998V16.39C21 18.02 19.66 19.36 18 19.36Z" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 9.66003C7 8.73003 7.76 7.96997 8.69 7.96997C9.62 7.96997 10.38 8.73003 10.38 9.66003C10.38 11.54 7.71 11.74 7.12 13.53C7 13.9 7.31 14.27 7.7 14.27H10.38" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.04 14.26V8.55003C16.04 8.29003 15.87 8.05997 15.62 7.98997C15.37 7.91997 15.1 8.01997 14.96 8.23997C14.24 9.39997 13.46 10.72 12.78 11.88C12.67 12.07 12.67 12.32 12.78 12.51C12.89 12.7 13.1 12.8199 13.33 12.8199H17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const supportIconInActive=()=>{
  
    return(
        <svg width="24" height="25" viewBox="0 0 24 25" fill='none' xmlns="http://www.w3.org/2000/svg">
        <path d="M18 19.36H17.24C16.44 19.36 15.68 19.67 15.12 20.23L13.41 21.92C12.63 22.69 11.36 22.69 10.58 21.92L8.87 20.23C8.31 19.67 7.54 19.36 6.75 19.36H6C4.34 19.36 3 18.03 3 16.39V5.47998C3 3.83998 4.34 2.51001 6 2.51001H18C19.66 2.51001 21 3.83998 21 5.47998V16.39C21 18.02 19.66 19.36 18 19.36Z" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 9.66003C7 8.73003 7.76 7.96997 8.69 7.96997C9.62 7.96997 10.38 8.73003 10.38 9.66003C10.38 11.54 7.71 11.74 7.12 13.53C7 13.9 7.31 14.27 7.7 14.27H10.38" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.04 14.26V8.55003C16.04 8.29003 15.87 8.05997 15.62 7.98997C15.37 7.91997 15.1 8.01997 14.96 8.23997C14.24 9.39997 13.46 10.72 12.78 11.88C12.67 12.07 12.67 12.32 12.78 12.51C12.89 12.7 13.1 12.8199 13.33 12.8199H17" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const supportIcon={
    active:supportIconActive,
    inactive:supportIconInActive
 
};
