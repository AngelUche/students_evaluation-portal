import AngelImg from "../../assets/admin/Angel.jpg";
import DefaultImg from "../../assets/admin/avatar.jpg";
import EmmanuelImg from "../../assets/admin/Emmanuel.jpg";


export type studentDataType = {
    id: number;
    name: string;
    section: string;
    firstName: string;
    lastName: string;
    otherName: string;
    address: string;
    phoneNumber: string;
    email: string | null;
    position: string;
    gender: string;
    image: string;
    classDesignation: string | null;
}


const studentData = [
    {
        id: "ST-2353",
        name: "Emmanuel Nnaemeka",
        section: "student",
        firstName: "Emmanuel",
        lastName: "Nnaemeka",
        otherName: "Mightguy",
        address: "1, Street Road, LGA, State, Country",
        position: "Student",
        phoneNumber: "+234816234787",
        email: null,
        classDesignation: "JS2",
        gender: "Male",
        image: EmmanuelImg
    },
    {
        id: "ST-1029",
        section: "student",
        name: "Lolade ComputeWell",
        firstName: "Lolade",
        lastName: "ComputeWell",
        otherName: "Akinloye",
        address: "1, Street Road, LGA, State, Country",
        position: "Student",
        phoneNumber: "+234816234787",
        classDesignation: "JS3",
        email: null,
        gender: "Female",
        image: DefaultImg
    },
    {
        id: "ST-9182",
        section: "student",
        name: "Sanctus Peter",
        firstName: "Sanctus",
        lastName: "Peter",
        otherName: "Max",
        address: "1, Street Road, LGA, State, Country",
        phoneNumber: "+234816234787",
        position: "Student",
        classDesignation: "SS1",
        email: null,
        gender: "Male",
        image: DefaultImg
    },
    {
        id: "ST-8927",
        section: "student",
        name: "Angel Uche",
        firstName: "Angel",
        lastName: "Uche",
        otherName: "Lucy",
        position: "Student",
        phoneNumber: "+234816234787",
        address: "1, Street Road, LGA, State, Country",
        email: null,
        classDesignation: "JS1",
        gender: "Female",
        image: AngelImg
    },
    {
        id: "ST-7490",
        section: "student",
        name: "Chukwuemeka Obiora",
        firstName: "Chukwuemeka",
        lastName: "Daniel",
        otherName: "Obiora",
        address: "1, Street Road, LGA, State, Country",
        position: "Student",
        phoneNumber: "+234816234787",
        email: null,
        classDesignation: "JS1",
        gender: "Male",
        image: EmmanuelImg
    },
    {
        id: "ST-6489",
        section: "student",
        name: "Ani Chidubem",
        firstName: "Chidubem",
        lastName: "Ani",
        otherName: "John",
        address: "1, Street Road, LGA, State, Country",
        position: "Student",
        phoneNumber: "+234816234787",
        email: null,
        classDesignation: "SS2",
        gender: "Female",
        image: DefaultImg
    },
    {
        id: "ST-2353",
        section: "student",
        name: "Ogwaluonye Onyedika",
        firstName: "Onyedika",
        lastName: "Ogwaluonye",
        otherName: "Max",
        address: "1, Street Road, LGA, State, Country",
        phoneNumber: "+234816234787",
        position: "Student",
        email: null,
        classDesignation: "SS3",
        gender: "Male",
        image: DefaultImg
    },
    {
        id: "ST-3853",
        section: "student",
        name: "Okafor Daniel",
        firstName: "Chiemerie",
        lastName: "Okafor",
        otherName: "Daniel",
        position: "Student",
        phoneNumber: "+234816234787",
        address: "1, Street Road, LGA, State, Country",
        classDesignation: "JS1",
        email: null,
        gender: "Female",
        image: AngelImg
    },
    {
        id: "ST-4861",
        section: "student",
        name: "Martins Chibuoke",
        firstName: "Martins",
        lastName: "Chibuoke",
        otherName: "Tochukwu",
        address: "1, Street Road, LGA, State, Country",
        position: "Student",
        phoneNumber: "+234816234787",
        email: null,
        classDesignation: "JS3",
        gender: "Male",
        image: EmmanuelImg
    },
    {
        id: "ST-5980",
        section: "student",
        name: "Ochike Livinus",
        firstName: "Livinus",
        lastName: "Ochike",
        otherName: "John",
        address: "1, Street Road, LGA, State, Country",
        position: "Student",
        phoneNumber: "+234816234787",
        email: null,
        classDesignation: "SS1",
        gender: "Female",
        image: DefaultImg
    },
    {
        id: "ST-6072",
        section: "student",
        name: "Akujuaobi John",
        firstName: "John",
        lastName: "Akujuaobi",
        otherName: "Nnadozie",
        address: "1, Street Road, LGA, State, Country",
        phoneNumber: "+234816234787",
        email: null,
        position: "Student",
        classDesignation: "SS2",
        gender: "Male",
        image: DefaultImg
    },
    {
        id: "ST-9809",
        section: "student",
        name: "Ikechukwu Paul",
        firstName: "Paul",
        lastName: "Ikechukwu",
        otherName: "Emelie",
        position: "Student",
        phoneNumber: "+234816234787",
        address: "1, Street Road, LGA, State, Country",
        email: null,
        classDesignation: "JS2",
        gender: "Female",
        image: AngelImg
    },
]

export { studentData };