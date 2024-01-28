import { ToastContainer, toast } from 'react-toastify';


const userNotfound = () => toast.error("User not found", {
    position: "top-right",
    autoClose: 3000, // 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
});


const loggedIn = () => toast.success("Logged in Sucessfully", {
    position: "top-right",
    autoClose: 3000, // 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
});

const signedIn = () => toast.success("Signed in Sucessfully", {
    position: "top-right",
    autoClose: 3000, // 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
});

const userFound = () => toast.error("User already created, login instead!", {
    position: "top-right",
    autoClose: 3000, // 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
});
export  {userNotfound,loggedIn,signedIn,userFound};
