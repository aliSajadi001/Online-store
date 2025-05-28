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

function Baner() {
     return (
          <div className="w-full h-screen overflow-hidden">
               <Carousel
                    plugins={[
                         Autoplay({
                              delay: 6000,
                         }),
                    ]}
                    className="w-full h-full"
               >
                    <CarouselContent>
                         {images.map((image, index) => (
                              <CarouselItem
                                   key={index}
                                   className="w-full h-full"
                              >
                                   <Image
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        width={1920}
                                        height={1080}
                                        quality={90}
                                   />
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
