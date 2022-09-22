import { FaUser, FaPhoneAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { HiLockClosed, HiLink } from 'react-icons/hi'

export const loginForm = [
    {
        icon: {
            name: <FaUser />,
            size: "text-2xl"
        },

        input: {
            type: "text",
            name: "userName",
            placeholder: "Enter Your Full Name*",
            required: true,
        }
    },
    {
        icon: {
            name: <HiLockClosed />,
            size: "text-2xl"
        },

        input: {
            type: "password",
            name: "userPassword",
            placeholder: "Enter Your Password*",
            required: true,
        }
    },
]

export const signupForm = [
    {
        icon: {
            name: <FaUser />,
            size: "text-xl"
        },

        input: {
            type: "text",
            name: "userName",
            placeholder: "Enter Your Full Name*",
            required: true,
        }
    },
    {
        icon: {
            name: <GrMail />,
            size: "text-2xl"
        },

        input: {
            type: "email",
            name: "userEmail",
            placeholder: "Enter Your Email ID*",
            required: true,
        }
    },
    {
        icon: {
            name: <FaPhoneAlt />,
            size: "text-lg"
        },

        input: {
            type: "tel",
            name: "userPhone",
            placeholder: "Enter Your Phone Number*",
            required: true,
        }
    },
    {
        icon: {
            name: <HiLink />,
            size: "text-2xl"
        },

        input: {
            type: "url",
            name: "userProfileImg",
            placeholder: "Enter URL of Your Profile Image*",
            required: false,
        }
    },
    {
        icon: {
            name: <HiLockClosed />,
            size: "text-2xl"
        },

        input: {
            type: "password",
            name: "userPassword",
            placeholder: "Enter Your Password*",
            required: true,
        }
    },
    {
        icon: {
            name: <HiLockClosed />,
            size: "text-2xl"
        },

        input: {
            type: "password",
            name: "cnfrmPassword",
            placeholder: "Confirm Your Password*",
            required: true,
        }
    },
]