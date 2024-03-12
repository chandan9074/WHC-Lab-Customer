"use client";
import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Images from "../../../../public/assets/Images";
import ChooseUsLeftSide from "./ChooseUsLeftSide";
import ChooseUsRightSide from "./ChooseUsRightSide";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ChooseUsContainer = () => {
    const sectionOneRef = useRef(null);
    const textOneRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const textOne = textOneRef.current;
        const sectionOne = sectionOneRef.current;
        // const textTwo = textTwoRef.current;

        const targetY = 1500;
        const topOffset = sectionOne.getBoundingClientRect().top;
        const textHeight = textOne.clientHeight;

        const yPosition = targetY - topOffset - textHeight;

        const tweenOne = gsap.to(textOne, {
            y: yPosition,
            scrollTrigger: {
                trigger: sectionOneRef.current,
                pin: sectionOneRef.current,
                scrub: true,
                start: "top top",
                end: "+=700px",
                markers: false,
            },
        });

        // const tweenTwo = gsap.to(textTwo, {
        //   y: 400 - textTwo.clientHeight - 32,
        //   scrollTrigger: {
        //     trigger: sectionTwoRef.current,
        //     pin: sectionTwoRef.current,
        //     scrub: true,
        //     start: "top top",
        //     end: "+=700px",
        //     markers: true
        //   }
        // });

        // Cleanup
        return () => {
            tweenOne.kill();
        };
    }, []);

    return (
        <div
            className="h-[40rem] w-full grid grid-cols-2 bg-red-400 py-24"
            ref={sectionOneRef}
        >
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                vitae tenetur, fugiat neque, recusandae labore iusto quia unde
                suscipit repellat blanditiis explicabo aliquid deserunt, maxime
                quam corrupti? Vel cupiditate, molestias expedita inventore
                mollitia nostrum neque natus, fugiat distinctio id consectetur
                perspiciatis harum! Porro architecto optio accusamus rerum
                aspernatur quibusdam aperiam.
            </div>
            <div className="h-40 overflow-hidden bg-green-400" ref={textOneRef}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                eum facere molestiae quod distinctio id voluptas quibusdam ut
                iure dolore, nobis temporibus aspernatur neque veniam vel eius
                rem minus ducimus, laboriosam repudiandae dolorem maiores, fuga
                quae. Consectetur perferendis doloribus, neque alias id fugiat
                et adipisci soluta repudiandae tenetur, voluptatibus dolor
                asperiores! Accusantium repellendus nisi fugiat rerum autem,
                corrupti tempora similique minima deserunt error, unde natus
                vero? Vitae numquam optio dolor fugit autem asperiores vel enim
                necessitatibus possimus molestias, obcaecati esse ab accusamus
                harum odio molestiae eaque consequuntur pariatur, vero, facere
                non eligendi. Quia dolorum inventore exercitationem. Recusandae
                sequi enim cum eum impedit, esse illo, accusamus tenetur eos
                magnam doloremque. Deleniti accusamus maxime a temporibus
                corrupti sint dicta perferendis labore rerum dolorem
                reprehenderit dolorum doloremque cupiditate numquam praesentium
                repellat eos ab omnis, obcaecati odio magni? Hic enim quia rem
                adipisci doloribus culpa fugiat iure debitis perspiciatis ullam
                non soluta aperiam earum, nostrum quod laudantium officia
                repellat architecto. Aliquam, ipsum ratione! Neque assumenda
                possimus necessitatibus, beatae nemo aut quo consequuntur
                mollitia, ut dolores doloremque veniam eum accusamus!
                Repudiandae minima, vero sequi, corrupti voluptatum voluptate
                mollitia beatae adipisci commodi provident sint sit incidunt
                quae eum cumque esse omnis? Minus provident fuga fugiat vitae
                dolorem officiis modi ipsam excepturi rem, autem laudantium
                atque impedit laborum repellendus, delectus quo maxime
                recusandae itaque eligendi officia expedita perferendis. Omnis
                itaque illum facere quod repellendus, aliquid voluptatum
                corrupti ratione nulla eaque. Suscipit non culpa maxime dolore
                fugit quae eius consequatur delectus perferendis recusandae fuga
                quos natus ipsam molestias aliquid, blanditiis, similique ipsa
                iste, voluptatem nulla ducimus? Blanditiis, corporis perferendis
                aspernatur quam aperiam, facere repudiandae nulla, consequatur
                rem porro explicabo dolor odit cumque. Animi corporis at
                cupiditate labore facilis! Esse blanditiis cum enim saepe
                corrupti pariatur impedit assumenda maxime incidunt ad fugiat,
                sapiente natus perspiciatis dolores aliquid dolor quos nisi
                laudantium alias aperiam. Exercitationem quisquam nulla, maiores
                dolor a beatae aspernatur, corporis omnis aut non odit soluta ab
                vel. Doloribus enim, obcaecati dicta totam non, illum debitis
                sunt deleniti earum facilis commodi modi cupiditate porro
                quisquam saepe similique minus sequi. Exercitationem corporis
                rem dignissimos alias consequuntur natus velit perferendis
                doloremque accusantium, beatae architecto praesentium expedita,
                perspiciatis saepe, sit ab inventore laboriosam dolorum quasi
                non. Inventore voluptate asperiores maxime ad atque
                reprehenderit! Possimus maxime, temporibus sequi eius architecto
                alias nesciunt perferendis impedit odit cum enim laboriosam
                beatae explicabo suscipit ut corrupti pariatur facilis labore
                dolore. Repellendus nihil laudantium, illo odio reiciendis,
                provident rem quod itaque rerum neque quidem ab corrupti, minima
                beatae sapiente esse. Repellendus, quas accusantium alias iure
                voluptatum non impedit ullam optio earum, eius officia! Fugiat
                dolores sed nemo placeat nesciunt, ipsum, ullam quasi vitae
                velit aliquid excepturi itaque temporibus, dignissimos in
                voluptatem tempora libero repellendus veniam accusantium nisi
                recusandae atque corporis! Aut at, nisi obcaecati amet veritatis
                cum ipsa vel, non veniam exercitationem assumenda dolor eum
                dignissimos. Earum ipsam commodi atque voluptatum tenetur
                ducimus eveniet, quisquam voluptatibus recusandae culpa alias
                impedit laboriosam voluptatem! Deserunt, cupiditate suscipit?
                Quam assumenda quisquam eaque itaque unde! Odio necessitatibus
                porro error ducimus.
            </div>
        </div>
        // <div className="relative overflow-hidden">
        //     <div className="container mx-auto px-6 sm:px-3 xl:py-[120px] lg:py-20 md:py-14 sm:py-10 py-6 relative z-20">
        //         <SectionHeader title={"WHY CHOOSE US"} />
        //         <div
        //             className="grid grid-cols-12 xl:mt-12 lg:mt-10 md:mt-9 sm:mt-7 mt-6"
        //             ref={sectionOneRef}
        //         >
        //             <ChooseUsLeftSide />
        //             <ChooseUsRightSide refId={textOneRef} />
        //         </div>
        //     </div>
        //     <Image
        //         src={Images.offer_image}
        //         width={1000}
        //         height={1000}
        //         alt="offer_image"
        //         className="2xl:w-[465px] xl:w-[562px] lg:w-[480px] 2xl:h-[427px] xl:h-[515px] lg:h-[420px]  absolute left-28 top-[23rem] z-10 lg:block hidden"
        //     />
        //     <Image
        //         src={Images.offer_image}
        //         width={1000}
        //         height={1000}
        //         alt="offer_image"
        //         className="2xl:w-[460px] xl:w-[370px] lg:w-[300px] 2xl:h-[422px] xl:h-[340px] lg:h-[270px] rotate-[54deg] absolute -right-7 top-20 z-10 lg:block hidden"
        //     />
        //     <Image
        //         src={Images.offer_image}
        //         width={1000}
        //         height={1000}
        //         alt="offer_image"
        //         className="2xl:w-[300px] xl:w-[370px] lg:w-[300px] 2xl:h-[270px] xl:h-[340px] lg:h-[270px] rotate-[54deg] absolute right-[38rem] top-[28rem] z-10 lg:block hidden"
        //     />
        // </div>
        // <div class="w-full overflow-hidden">
        //     <div class="w-full h-screen flex flex-col bg-indigo-200 justify-center px-4">
        //         <div class="container mx-auto p-8">
        //             <h1 class="text-3xl text-center font-semibold mb-12">
        //                 GSAP ScrollTrigger Pinned Columns
        //             </h1>
        //             <p class="text-lg text-center">Scroll Down</p>
        //         </div>
        //     </div>
        //     <div class="w-full h-[400px] bg-pink-200 px-4" ref={sectionOneRef}>
        //         <div class="container mx-auto h-full flex justify-center items-center">
        //             <div class="h-[400px] overflow-hidden flex justify-center">
        //                 <div class="w-1/2">
        //                     {/* <img class="max-w-none" src="https://images.unsplash.com/photo-1621286203046-7194a5fd81c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt=""> */}
        //                 </div>
        //                 <div class="w-1/2 bg-teal-700 text-white flex justify-center">
        //                     <div class="w-4/5">
        //                         <div ref={textOneRef}>
        //                             <p class="my-4">
        //                                 Lorem ipsum dolor sit amet consectetur
        //                                 adipisicing elit. Dolor asperiores
        //                                 laborum temporibus pariatur quasi vel
        //                                 cumque autem sunt odit incidunt,
        //                                 eligendi maxime necessitatibus. Debitis
        //                                 facilis ducimus dolor iusto? Omnis autem
        //                                 velit doloremque libero, saepe illum
        //                                 expedita temporibus odit. Labore
        //                                 voluptate quae illum eos exercitationem
        //                                 facere consectetur nesciunt quibusdam
        //                                 quod atque.
        //                             </p>
        //                             <p class="my-4">
        //                                 Molestiae incidunt delectus dolore est
        //                                 earum velit laboriosam quam expedita!
        //                                 Unde, assumenda saepe beatae
        //                                 perspiciatis ea magnam illum quos nam
        //                                 eius impedit iure sed sunt illo quaerat
        //                                 laboriosam quod cum tenetur itaque
        //                                 dolores incidunt enim nobis inventore
        //                                 fugiat? Quo corporis cum nam
        //                                 voluptatibus. Adipisci tempora autem
        //                                 assumenda quae? Exercitationem, tempora.
        //                             </p>
        //                             <p class="my-4">
        //                                 Voluptate inventore earum officiis
        //                                 itaque, veritatis excepturi architecto
        //                                 perspiciatis quisquam numquam mollitia
        //                                 perferendis iusto? Beatae, magnam.
        //                                 Exercitationem error autem aliquid
        //                                 mollitia iusto expedita delectus omnis
        //                                 illo doloribus sapiente, officia maxime
        //                                 minima facere, magnam quod amet in
        //                                 maiores vero officiis porro ratione eos
        //                                 tempore nisi? Repellat atque at numquam
        //                                 architecto libero.
        //                             </p>
        //                             <p class="my-4">
        //                                 Porro, consequatur. Quo eligendi
        //                                 veritatis, architecto iure dolor
        //                                 tempora, nam obcaecati neque ipsam
        //                                 adipisci temporibus minima assumenda eos
        //                                 quod tenetur pariatur ab et. Nemo
        //                                 perferendis exercitationem et placeat
        //                                 esse hic qui. At possimus nemo
        //                                 cupiditate sint maiores, unde veritatis.
        //                                 Vero animi omnis temporibus modi
        //                                 voluptate deserunt dolor corrupti dolore
        //                                 eveniet.
        //                             </p>
        //                             <p class="my-4">
        //                                 Pariatur quaerat deleniti sequi
        //                                 reiciendis modi optio, autem nisi eos
        //                                 magni rem reprehenderit placeat fugit
        //                                 libero, nulla, odit natus voluptates
        //                                 cupiditate est possimus aliquid itaque
        //                                 magnam! Repudiandae culpa aliquid,
        //                                 debitis alias recusandae reiciendis
        //                                 doloribus. Totam, quae. Architecto rerum
        //                                 vitae eaque mollitia quas quasi suscipit
        //                                 tempore dolorum cum? Vel, unde
        //                                 repellendus.
        //                             </p>
        //                             <p class="my-4">
        //                                 Adipisci excepturi velit placeat
        //                                 similique sequi soluta illum facere
        //                                 officiis numquam doloremque temporibus
        //                                 ducimus nostrum inventore magnam
        //                                 aspernatur laborum libero laudantium
        //                                 obcaecati nemo, illo officia recusandae
        //                                 consequuntur minima expedita. Debitis
        //                                 maxime ducimus voluptates et unde
        //                                 adipisci ad iure at id earum harum
        //                                 magnam odio, vel eveniet consectetur.
        //                                 Quaerat, quasi velit.
        //                             </p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ChooseUsContainer;
