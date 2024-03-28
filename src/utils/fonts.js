import { Poppins, Montserrat, Inter } from 'next/font/google'


const poppins_init = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins'
})

const montserrat_init = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-montserrat'
})


export const poppins = poppins_init.variable;
export const montserrat = montserrat_init.variable;