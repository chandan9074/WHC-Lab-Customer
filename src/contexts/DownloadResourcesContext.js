import LocationService from "@/services/LocationService";
import { createContext, useContext, useEffect, useState } from "react";
import { getCookie, hasCookie } from "cookies-next";
import { toast } from "react-toastify";
