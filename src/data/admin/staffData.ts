import AngelImg from "../../assets/admin/Angel.jpg";
import DefaultImg from "../../assets/admin/avatar.jpg";
import EmmanuelImg from "../../assets/admin/Emmanuel.jpg";

export type staffDataType = {
    id: string;
    section: string
    name: string;
    firstName: string;
    lastName: string;
    otherName: string;
    address: string;
    phoneNumber: string;
    email:string
    position: string;
    image: string;
}

const staffData = [
    {
        id: "SE-2990",
        section: "staff",
        name: "Emmanuel Nnaemeka",
        firstName: "Emmanuel",
        lastName: "Onyejeme",
        otherName: "Nnaemeka",
        address: "1, Street Road, LGA, State, Country",
        phoneNumber: "+234816234787",
        email: "emmanuelMightguy@gmail.com",
        position: "Security",
        image: EmmanuelImg
    },
    {
        id: "ME-8920",
        section: "staff",
        name: "Lolade ComputeWell",
        firstName: "Lolade",
        lastName: "ComputeWell",
        otherName: "Akinloye",
        address: "1, Street Road, LGA, State, Country",
        email: "Lolade@hotmail.com",
        phoneNumber: "+234816234787",
        position: "Mechanic",
        image: DefaultImg
    },
    {
        id: "HD-2890",
        section: "staff",
        name: "Sanctus Peter",
        firstName: "Sanctus",
        lastName: "Peter",
        otherName: "Bad guy",
        address: "1, Street Road, LGA, State, Country",
        phoneNumber: "+234816234787",
        email: "sanctuspeter@gmail.com",
        position: "Proprietor",
        image: DefaultImg
    },
    {
        id: "HD-5661",
        section: "staff",
        name: "Angel Uche",
        firstName: "Angel",
        lastName: "Uche",
        otherName: "Esere",
        address: "1, Street Road, LGA, State, Country",
        phoneNumber: "+234816234787",
        email: "AngelUche@yahoo.com",
        position: "Proprietess",
        image: AngelImg
    },
    {
        id: "TE-2990",
        section: "staff",
        name: "Chukwuemeka Obiora",
        firstName: "Chukwuemeka",
        lastName: "Daniel",
        otherName: "Obiora",
        address: "1, Street Road, LGA, State, Country",
        phoneNumber: "+234816234787",
        email: "emmanuelMightguy@gmail.com",
        position: "Teacher",
        image: EmmanuelImg
    },
    {
        id: "TE-6539",
        section: "staff",
        name: "Ani Chidubem",
        firstName: "Chidubem",
        lastName: "Ani",
        otherName: "John",
        address: "1, Street Road, LGA, State, Country",
        email: "Lolade@hotmail.com",
        phoneNumber: "+234816234787",
        position: "Teacher",
        image: DefaultImg
    },
    {
        id: "TE-0990",
        section: "staff",
        name: "Ogwaluonye Onyedika",
        firstName: "Onyedika",
        lastName: "Ogwaluonye",
        otherName: "Max",
        address: "1, Street Road, LGA, State, Country",
        phoneNumber: "+234816234787",
        email: "sanctuspeter@gmail.com",
        position: "Proprietor",
        image: DefaultImg
    },
    {
        id: "TE-3902",
        section: "staff",
        name: "Okafor Daniel",
        firstName: "Chiemerie",
        lastName: "Okafor",
        otherName: "Daniel",
        address: "1, Street Road, LGA, State, Country",
        phoneNumber: "+234816234787",
        email: "AngelUche@yahoo.com",
        position: "Teacher",
        image: AngelImg
    },
    {
        id: "TE-0208",
        section: "staff",
        name: "Martins Chibuoke",
        firstName: "Martins",
        lastName: "Chibuoke",
        otherName: "Tochukwu",
        address: "1, Street Road, LGA, State, Country",
        phoneNumber: "+234816234787",
        email: "emmanuelMightguy@gmail.com",
        position: "Teacher",
        image: EmmanuelImg
    },
    {
        id: "ME-6312",
        section: "staff",
        name: "Ochike Livinus",
        firstName: "Livinus",
        lastName: "Ochike",
        otherName: "John",
        address: "1, Street Road, LGA, State, Country",
        email: "Lolade@hotmail.com",
        phoneNumber: "+234816234787",
        position: "Mechanic",
        image: DefaultImg
    },
    {
        id: "SE-8902",
        section: "staff",
        name: "Akujuaobi John",
        firstName: "John",
        lastName: "Akujuaobi",
        otherName: "Nnadozie",
        address: "1, Street Road, LGA, State, Country",
        phoneNumber: "+234816234787",
        email: "sanctuspeter@gmail.com",
        position: "Security",
        image: DefaultImg
    },
    {
        id: "LA-1046",
        section: "staff",
        name: "Ikechukwu Paul",
        firstName: "Paul",
        lastName: "Ikechukwu",
        otherName: "Emelie",
        address: "1, Street Road, LGA, State, Country",
        phoneNumber: "+234816234787",
        email: "AngelUche@yahoo.com",
        position: "Labs",
        image: AngelImg
    },
]

export { staffData };