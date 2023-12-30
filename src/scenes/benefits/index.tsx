
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SelectedPage,BenefitTypes } from "@/shared/types";
import Htext from "@/shared/Htext"
import Benefit from "./benefit"
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

 
 
type Props ={
    setSelectedPage:(value: SelectedPage)=>void;
}
const Benefits = ({setSelectedPage}:Props) => {

  const benefits:Array<BenefitTypes> = [{

    icon:<HomeModernIcon className="h-6 w-6"/>,
    title:"ksjdhksdhj",
    description:"skdjfksfhdsfhkafdhahfkahdfadhfkadfhkadfhah"
  },
  {
    icon:<UserGroupIcon className="h-6 w-6"/>,
    title:"ksjdhksdhj",
    description:"skdjfksfhdsfhkafdhahfkahdfadhfkadfhkadfhah"
  },
  {
    icon:<AcademicCapIcon className="h-6 w-6"/>,
    title:"ksjdhksdhj",
    description:"skdjfksfhdsfhkafdhahfkahdfadhfkadfhkadfhah"

  }]

  const container = {
    hidden:{},
    visible:{
      transition: { staggerChildren: .2 }
    }
  }
  return <section
            id="Benefits"
            className="mx-auto min-h-full w-5/6 py-20"
            >
            <motion.div 
              onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
              >
                <div className="md:my-5 md:w-3/5"> 
                  <Htext>MORE THAN JUST GYM</Htext>
                  <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus repellendus aut voluptatibus dolor odit. Esse repellendus voluptas rerum quisquam.</p>
                </div>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: .5}}
                  variants={container}
                  className="mt-5 md:flex items-center justify-between gap-8">
                  {benefits.map((benefit: BenefitTypes)=>(
                    <Benefit
                     key={benefit.title} 
                     icon={benefit.icon}
                     description={benefit.description}
                     title={benefit.title}
                     />
                  ))}
                </motion.div>
                <div className="mt-16 items-center justify-between gap-20 md:mt-28">
                  <img 
                    className="mx-auto"
                    src={BenefitsPageGraphic} alt="" />
                  <div>
                    <div className="relative">
                      <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                        <div>
                          <Htext>
                            Million of happy kashdfkjdsahf adskfjakfha askfdhadh 
                            <span className="text-primary-500">FIT</span>
                          </Htext>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="my-5"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam exercitationem beatae sunt amet inventore eligendi obcaecati officiis dignissimos? Obcaecati, dicta?</p>
                      <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit enim reiciendis aperiam laboriosam iusto cum quam, aliquid, similique laborum voluptate explicabo voluptatum, nihil doloremque neque!</p>
                    </div>
                    <div className="relative mt-16">
                      <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles action-button">
                        <ActionButton setSelectedPage={SelectedPage}>
                          Join Now
                        </ActionButton>
                      </div>
                    </div>
                  </div>
                </div>
            </motion.div>
        </section>
}

export default Benefits
