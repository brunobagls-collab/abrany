'use client';
import {SmoothScroll,ScrollProgress,MenuProvider,useActiveSection,Marquee} from '@/components/effects';
import {StickyHeader,MenuOverlay} from '@/components/chrome';
import {Hero} from '@/components/hero';
import {SectionCourses,SectionMethod,SectionTrainers,SectionPricing,SectionFaq,SiteFooter} from '@/components/sections';
const SECTION_IDS=['home','courses','trainers','pricing'] as const;
const DOMAINS=['Deep Focus','Working Memory','Processing Speed','Cognitive Flexibility'] as const;
const CLAIMS=['Measured','Adaptive','Retested','Yours'] as const;
export default function Home(){const active=useActiveSection(SECTION_IDS);return <MenuProvider><SmoothScroll/><ScrollProgress/><StickyHeader active={active}/><MenuOverlay/><main className="overflow-x-clip"><Hero active={active}/><SectionCourses/><Marquee words={DOMAINS}/><SectionMethod/><SectionTrainers/><Marquee words={CLAIMS} baseVelocity={1.8}/><SectionPricing/><SectionFaq/></main><SiteFooter/></MenuProvider>}
