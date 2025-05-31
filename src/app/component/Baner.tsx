'use client';
import {
     Carousel,
     CarouselContent,
     CarouselItem,
     CarouselNext,
     CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { images } from './datas/banerData';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

function Baner() {
     return (
          <div className="w-full h-screen overflow-hidden ">
               <Carousel
                    plugins={[
                         Autoplay({
                              delay: 9000,
                         }),
                    ]}
                    className="w-full h-full"
               >
                    {/* Images--------------------------------------------------------------------------------------- */}
                    <CarouselContent>
                         {images.map((image, index) => (
                              <CarouselItem
                                   key={index}
                                   className="w-full h-full"
                              >
                                   <motion.div className="w-full h-full relative">
                                        <Image
                                             src={image}
                                             alt={`Slide ${index + 1}`}
                                             className="w-full h-full object-cover "
                                             width={1920}
                                             height={1080}
                                             quality={90}
                                        />
                                        <motion.p
                                             initial={{
                                                  opacity: 0,
                                                  y: 200,
                                             }}
                                             whileInView={{
                                                  opacity: 1,
                                                  y: 0,
                                                  transition: { duration: 2 },
                                             }}
                                             className={`absolute ${index % 2 === 0 ? 'right-[50%]' : 'left-[50%]'}  md:top-[30%] top-[20%] text-white text-2xl font-bold flex flex-col text-center items-center justify-center gap-3 md:gap-9`}
                                        >
                                             {/* Contents------------------------------------------------------------------------------------ */}
                                             <motion.span
                                                  initial={{
                                                       opacity: 0,
                                                       y: 20,
                                                  }}
                                                  whileInView={{
                                                       opacity: 1,
                                                       y: 0,
                                                       transition: {
                                                            duration: 0.5,
                                                            delay: 0.1,
                                                       },
                                                  }}
                                                  className="text-xl md:text-3xl lg:text-4xl font-bold text-orange-600"
                                             >
                                                  Lorem ipsum dolor.
                                             </motion.span>
                                             <motion.span
                                                  initial={{
                                                       opacity: 0,
                                                       y: 20,
                                                  }}
                                                  whileInView={{
                                                       opacity: 1,
                                                       y: 0,
                                                       transition: {
                                                            duration: 0.5,
                                                            delay: 0.8,
                                                       },
                                                  }}
                                                  className="text-sm font-mono text-orange-400 md:max-w-[70%] w-[90%]"
                                             >
                                                  Lorem, ipsum dolor sit amet
                                                  consectetur adipisicing elit.
                                                  Saepe assumenda exercitationem
                                                  minima architecto, incidunt
                                             </motion.span>
                                             <motion.div
                                                  initial={{
                                                       opacity: 0,
                                                       y: 20,
                                                  }}
                                                  whileInView={{
                                                       opacity: 1,
                                                       y: 0,
                                                       transition: {
                                                            duration: 0.5,
                                                            delay: 1.3,
                                                       },
                                                  }}
                                             >
                                                  {/* Go shop botton------------------------------------------------------------------------ */}
                                                  <Button
                                           
                                                       className="text-xs md:text-xl font-medium text-white bg-orange-600 rounded-md hover:bg-orange-400 w-[90px] h-[25px] md:h-[40px] md:w-[120px] "
                                                  >
                                                       Go Shop
                                                  </Button>
                                             </motion.div>
                                        </motion.p>
                                   </motion.div>
                              </CarouselItem>
                         ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
               </Carousel>
          </div>
     );
}

export default Baner;
