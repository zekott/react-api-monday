import React from 'react'
import "monday-ui-react-core/dist/main.css"
import {Heading, Box, Divider, Flex, Icon, Tooltip} from "monday-ui-react-core"
import { Info } from "monday-ui-react-core/dist/allIcons";

const Esgs = ({esgs}) => {
    return (
        <>
        <Flex direction={Flex.directions.COLUMN} align={Flex.align.CENTER} gap={Flex.gaps.LARGE}>
            {esgs?.map((esg) => (
                <>
                <Box shadow={Box.shadows.LARGE} borderColor={Box.borderColors.LAYOUT_BORDER_COLOR} 
                    rounded={Box.roundeds.MEDIUM} padding={Box.paddings.MEDIUM}>
                    <Heading type={Heading.types.h1} value={esg.company_name}/>
                    <Divider></Divider>
                    <Flex direction={Flex.directions.COLUMN} align={Flex.align.START}>
                        <Heading type={Heading.types.h3} value="Environment"/>
                        <Flex>
                            <Heading type={Heading.types.h6} value="Grade:"/>
                            <Heading type={Heading.types.h6} value={esg.environment_grade}/>
                        </Flex>
                        <Flex>
                            <Heading type={Heading.types.h6} value="Score:"/>
                            <Heading type={Heading.types.h6} value={esg.environment_score}/>
                        </Flex>                                
                        <Heading type={Heading.types.h3} value="Social"/>                            
                        <Flex>
                            <Heading type={Heading.types.h6} value="Grade:"/>
                            <Heading type={Heading.types.h6} value={esg.social_grade}/>
                        </Flex>
                        <Flex>
                            <Heading type={Heading.types.h6} value="Score:"/>
                            <Heading type={Heading.types.h6} value={esg.social_score}/>
                        </Flex>
                        <Heading type={Heading.types.h3} value="Corporate Governance"/>                            
                        <Flex>
                            <Heading type={Heading.types.h6} value="Grade:"/>
                            <Heading type={Heading.types.h6} value={esg.governance_grade}/>
                        </Flex>
                        <Flex>                                        
                            <Heading type={Heading.types.h6} value="Score:"/>
                            <Heading type={Heading.types.h6} value={esg.governance_score}/>
                        </Flex>                            
                    </Flex>
                </Box>
                </>
            ))}
            <Tooltip content="ESG Enterprise's ESG Rating data ('Scores') are all based on public information and provided for informational purposes only. No member of ESG Enterprise or related parties make any prediction, warranty or representation whatsoever, expressly or impliedly, either as to the suitability of the Scores for any particular purposes or the validity of any derivative analysis or conclusion based on the Scores.">
                <div className="monday-storybook-tooltip_icon-wrapper">
                    <Icon icon={Info} />
                </div>
            </Tooltip>            
        </Flex>
         </>
    )
};

export default Esgs