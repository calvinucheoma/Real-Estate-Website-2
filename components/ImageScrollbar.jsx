import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";



const LeftArrow = () => {
    const {isFirstItemVisible, visibleItemsWithoutSeparators, initComplete, scrollPrev} = useContext(VisibilityContext);

    const [disabled, setDisabled] = useState(!initComplete || (initComplete && isFirstItemVisible));

    useEffect(() => {
        if (visibleItemsWithoutSeparators.length) {
            setDisabled(isFirstItemVisible);
        }
    }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon 
                as={FaArrowAltCircleLeft} 
                onClick={() => scrollPrev()} 
                fontSize='2xl'
                cursor='pointer'
                disabled={disabled}
            />
        </Flex>
    )
};

const RightArrow = () => {
    const {isLastItemVisible, visibleItemsWithoutSeparators, scrollNext} = useContext(VisibilityContext);

    const [disabled, setDisabled] = useState(!visibleItemsWithoutSeparators.length &&  isLastItemVisible);

    useEffect(() => {
        if (visibleItemsWithoutSeparators.length) {
            setDisabled(isLastItemVisible);
        }
    }, [isLastItemVisible, visibleItemsWithoutSeparators]);

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon 
                as={FaArrowAltCircleRight} 
                onClick={() => scrollNext()} 
                fontSize='2xl'
                cursor='pointer'
                disabled={disabled}
            />
        </Flex>
    )
};

const ImageScrollbar = ({data}) => {

    return (

        <ScrollMenu 
            LeftArrow={LeftArrow} 
            RightArrow={RightArrow}
            style={{overflow: 'hidden'}}
        >

            {
                data.map((item) => (
                    <Box 
                        key={item.id} 
                        width='910px' 
                        overflow='hidden' 
                        itemId={item.id} 
                        p='1'
                    >

                        <Image 
                            placeholder="blur" 
                            blurDataURL={item.url}
                            src={item.url}
                            width={1000}
                            height={500}
                            alt='property'
                            sizes="(max-width:500px) 100px, (max-width:1024px) 400px, 1000px"
                        />

                    </Box>
                ))
            }
            
        </ScrollMenu>

    );
};

export default ImageScrollbar;