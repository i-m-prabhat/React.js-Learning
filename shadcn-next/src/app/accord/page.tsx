import
{
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const AccordPage = () =>
{
    const faq = [
        {
            question: "What is Lorem Ipsum?",
            answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat
            . Duis aute irure dolor in reprehenderit in voluptate velit es`
        },
        {
            question: "Where does it come from?",
            answer: "Excepteur sint occaecat cupidatat non proident, suntin culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
    return (
        <div className="flex justify-center items-center h-full">
            <main className="w-[500px] p-4">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </main>
        </div>

    )
}

export default AccordPage