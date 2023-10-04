
import { SgdsAccordion, SgdsAccordionItem} from '@govtechsg/sgds-web-component/react'

function About() {

  return (
    <sgds-template-grid>
      <sgds-content-area>
      <sgds-content-body>
          <SgdsAccordion>
            <SgdsAccordionItem> 
              <p slot="accordion-header">accordion</p>
              <span slot="accordion-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.</span>
              </SgdsAccordionItem>
            <SgdsAccordionItem> 
              <p slot="accordion-header">accordion</p>
              <span slot="accordion-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.</span>
              </SgdsAccordionItem>
          </SgdsAccordion>
        </sgds-content-body>
      </sgds-content-area>
    </sgds-template-grid>
  )
}

export default About
