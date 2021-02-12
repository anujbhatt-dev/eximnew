import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import blogs from '../blog_page/blogs/blogs'
import Aos from "aos"


export default class BlogsManual extends Component {


    state = {

        blogs: [

            //SKELETON  

            // {
            //     id: 1,
            //     shortTitle: `shortTitle`,
            //     title: `title`,
            //     titleImage: `image url`,
            //     shortContent: `shortContent`,
            //     content: `content`,
            //     date: `2021-02-10`,

            // },

            {
                id: 2,
                shortTitle:`Small Business Export Ideas`,
                title: `Small Business Export Ideas`,
                titleImage: `https://i.ibb.co/FqYfq5R/small-Bussi-image.jpg`,
                shortContent: `Searching for Small Business Export thoughts to design your best course of action into the world of import and export?  Mentioned below are business export thoughts that you can start as early`,
                content:`<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:7.5pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:21px;font-family:"Times New Roman",serif;color:black;'>Searching for Small Business Export thoughts to design your best course of action into the world of import and export?&nbsp;</span></p>
              <p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:7.5pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:21px;font-family:"Times New Roman",serif;color:black;'>Mentioned below are business export thoughts that you can start as early as possible to earn profits. Every other individual has a unique startup thought. But, when it comes to export business ideas, it requires more accurate and efficient Google research if you are searching for a private company to send out plans to design your best course of action into the world of import and export. How about we take a view of the best business export thoughts that you can select to begin ahead. India has countless business openings, be it import business thoughts or export business thoughts.</span></p>
              <ol style="list-style-type: decimal;margin-left:26px;">
                  <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Vegetable Export&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>- India is probably the biggest maker of vegetables, for example, potato, onion, cabbage, cauliflower, and these vegetables have an enormous necessity in neighbouring and far nations. Beginning a Small Business Export with vegetables is not a major assignment and a beneficial business. Along these lines, this is an impressive choice to begin an export business in India with low speculation.</span></li>
                  <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Clothing</span><span style="font-size:16.0pt;color:black;">- The clothing industry is an evergreen market, and when it comes to export, India tops the list as it has some of the world&rsquo;s finest fabric with low price. If you are looking for Business Export Ideas, then clothing is the best for Small Business Export, which means, less investment and high margin. If you are interested in this exciting business idea, then for more information, you may Google for clothing export ideas from India and know where and which region India exports clothing.</span></li>
                  <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Beauty Products&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>- On the off chance that you are truly intrigued with this energizing business thought, at that point for more data, you may Google for dress export thoughts from India. You can exchange and export the number of magnificence items as your drive for Small Business Exports.&nbsp;</span></li>
                  <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Fish Export&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>- Individuals around the globe love to fish, and there are numerous nations which import assortments of fish from nations like India, which have assortments of top-quality fishes, crabs, and so forth to oblige the expanding interest for these items around the world. Start your Small Business Export by selling fish.</span></li>
                  <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Meat Exports&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>- Indian meat is viewed as the best in quality and is an exceptionally beneficial business for a private company send out also. So need to additional marvel about which send out business is acceptable from India? You found the solution as a business opportunity, right&nbsp;</span></li>
                  <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Apparatus Export Business</span><span style='font-family:"Times New Roman",serif;'>- Become an exporter of little hardware. This can be possible by finding a solid client and a producer for the equivalent to get your first arrangement.&nbsp;</span></li>
                  <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Synthetic Exports&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>-With an always expanding interest for synthetics, India&apos;s is a top exporter of natural and inorganic synthetic substances to numerous nations. Indeed, even as a little scope wholesaler, taking a stab at beginning compound export is a beneficial export business in India.&nbsp;</span></li>
                  <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Oil-based goods&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>- India provides food with a huge scope of the oil-based commodity to different nations. In 2021, if you are hoping to begin some Small Business Export, chipping away at these Business Export Ideas is an extraordinary alternative to acquiring exceptional yields.</span></li>
                  <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Leather Products</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>&nbsp;- The requests for cowhide products are in every case high to begin a simple fare to neighbouring nations.&nbsp;</span></li>
                  <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Safety Shoes&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>- It likewise goes under cowhide articles. Huge, medium or little, every assembling unit have their natural and security standards to wear wellbeing shoes. Contact organizations abroad and begin selling security shoes as a feature of your fare business. It is one of the suitable fare business openings in India</span></li>
              </ol>`,
                date: `2021-02-10`,

            },
             {
                id: 1,
                shortTitle: `Top Profitable Product to Export from India`,
                title: `Top Profitable Product to Export from India`,
                titleImage: `https://i.ibb.co/9TRT2tS/tset.jpg`,
                shortContent: `The export enterprise is growing speedy and ball profession goes upstairs before. As an outcome about this, the Indians needs to enhance its financial matter between exports inside the remaining `,
                content: `<p style='margin-top:18.75pt;margin-right:0cm;margin-bottom:18.75pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:black;background:white;'>The export&nbsp;</span><span style='font-size:24px;font-family:"Times New Roman",serif;color:black;'>enterprise&nbsp;is&nbsp;growing&nbsp;speedy&nbsp;and ball&nbsp;profession&nbsp;goes&nbsp;upstairs&nbsp;before. As an&nbsp;outcome&nbsp;about&nbsp;this, the Indians needs to&nbsp;enhance&nbsp;its&nbsp;financial&nbsp;matter&nbsp;between&nbsp;exports&nbsp;inside&nbsp;the&nbsp;remaining&nbsp;decades. India is distributing at various international locations&nbsp;yet&nbsp;expands its&nbsp;businesses&nbsp;among&nbsp;foreign&nbsp;markets. the&nbsp;principal&nbsp;exports&nbsp;concerning&nbsp;India&nbsp;consist of&nbsp;pharmaceuticals, petroleum, vehicles, jewellery,&nbsp;below&nbsp;many&nbsp;others. Here is&nbsp;the&nbsp;list&nbsp;of&nbsp;top&nbsp;close&nbsp;products&nbsp;that *** exported&nbsp;beyond&nbsp;India&nbsp;or&nbsp;done&nbsp;full-size&nbsp;profits&nbsp;between&nbsp;terms&nbsp;about&nbsp;foreign&nbsp;currency. If&nbsp;you are&nbsp;getting&nbsp;in imitation of&nbsp;set up&nbsp;export&nbsp;companies&nbsp;between&nbsp;India&nbsp;below&nbsp;you&nbsp;need&nbsp;after&nbsp;comprehend&nbsp;the topmost exported&nbsp;goods&nbsp;up to expectation&nbsp;bear&nbsp;a&nbsp;tremendous&nbsp;demand&nbsp;inside&nbsp;the&nbsp;foreign&nbsp;market</span></p>
                <div style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:106%;font-size:15px;font-family:"Calibri",sans-serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:26px;">
                        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:106%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Times New Roman",serif;font-size:18.0pt;color:red;'>Machinery</span><span style='font-family:"Times New Roman",serif;font-size:18.0pt;color:#333333;'>&nbsp;&ndash;&nbsp;</span></li>
                    </ul>
                </div>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'><img width="565" src="https://myfiles.space/user_files/77694_3f702b48721b5277/77694_custom_files/img161313625667.jpeg" alt="image"></span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:black;'>It is India&rsquo;s&nbsp;largest&nbsp;industry&nbsp;as&nbsp;deals&nbsp;among the manufactured&nbsp;and&nbsp;maintaining&nbsp;machines&nbsp;for&nbsp;businesses&nbsp;or&nbsp;industries. The export rate of machinery ********* day by day from ***** as it includes nuclear reactors, mechanical appliances, pumps, building ************ equipment, heavy machines, agricultural tools, and so many others.</span><span style="color:black;">&nbsp;</span><span style='font-size:24px;font-family:"Times New Roman",serif;color:black;'>As it needs huge investment to start the machinery business because ** is a kind of large-scale business and it occurs at a heavy cost while exporting.</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></p>
                <div style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:106%;font-size:15px;font-family:"Calibri",sans-serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:26px;">
                        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:106%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Times New Roman",serif;font-size:18.0pt;color:red;'>************** products&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:18.0pt;color:#333333;'>&ndash; &nbsp;</span></li>
                    </ul>
                </div>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'><img width="426" src="https://myfiles.space/user_files/77694_3f702b48721b5277/77694_custom_files/img1613136256.jpeg" alt="image"></span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>In India, this industry ranks 10th about the value of global exports. This sector has seen ****** ****** and increment over several past decades as it is ***** as a research-***** industry. India does not export in Western countries **** the United States because they already have more advanced pharmaceuticals than India.</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;</span></p>
                <div style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:106%;font-size:15px;font-family:"Calibri",sans-serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:26px;">
                        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:106%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Times New Roman",serif;font-size:18.0pt;color:red;'>Organic chemicals&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:18.0pt;color:#333333;'>&ndash;&nbsp;</span></li>
                    </ul>
                </div>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'><img width="442" src="https://myfiles.space/user_files/77694_3f702b48721b5277/77694_custom_files/img1613136257.png" alt="image"></span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;border:none;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>It contains hydrogen with or without nitrogen, oxygen, *** other aspects. ***** is termed as the 11th biggest exporting country of organic chemical in the world ** **** sector. Germany ** the main market for India and this industry contributes **** ** the Indian economy. As organic ********* are widely used in medicine development and lab research. This type of business requires ****** knowledge ** chemical engineering and it is **** costly to ****** because of the lightweight of chemicals so many products of Indian organic chemicals are ****** exported to other countries.<br>&nbsp;</span></p>
                <div style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:106%;font-size:15px;font-family:"Calibri",sans-serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:26px;">
                        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:106%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Times New Roman",serif;font-size:18.0pt;color:red;'>Textile</span><span style="font-size:18.0pt;color:#333333;">&nbsp;&ndash;</span></li>
                    </ul>
                </div>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:18.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:18.0pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'><img width="494" src="https://myfiles.space/user_files/77694_3f702b48721b5277/77694_custom_files/img1613136257.jpeg" alt="image"></span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp; &nbsp;It is also ***** as a trump card of India while talking about exports as it is *** only industry that has ********* high employment ** ******** either in ***** of skilled or unskilled labourers. The United Kingdom, United States of America, United Arab Emirates, etc. are the top most ********* nations of textiles from India. As the textile is a flexible material that consists of *** natural as well as artificial fibres and it involves apparel accessories, clothing, knitted, etc. Also, India is *** of the largest nations in jute production at the international level</span></p>
                <div style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:106%;font-size:15px;font-family:"Calibri",sans-serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:26px;">
                        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:106%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Times New Roman",serif;font-size:18.0pt;color:red;'>Cereals</span><span style="font-size:18.0pt;color:#333333;">&nbsp;&ndash;</span></li>
                    </ul>
                </div>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'><img width="406" src="https://myfiles.space/user_files/77694_3f702b48721b5277/77694_custom_files/img1613136255.jpeg" alt="image"></span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:24px;font-family:"Times New Roman",serif;color:#333333;'>&nbsp;** India is a leading exporter of cereals worldwide, India is known as an agricultural driven market **** depends ** cereals production. India is also a top leading country of **** exporting in UAE, Iraq, Saudi Arabia, and Iran. The government of India has kept extremely competitive prices *** their exported items to the ********* ******* to increase the rice exporting from India.</span></p>`,
                date: `2021-02-10`,

            },
            




        ]

    }


    componentDidMount=()=>{
        window.scrollTo({top:0,behavior:"smooth"});
      Aos.init({
         duration: 1500,
         delay: 100,
       });
    }


    render() {

        return (
            <div className="mainBlogs">
           
          <div className="mainBlogs__2">
              <div className="mainBlogs__2_flex">
               { this.state.blogs.map((blog,i)=>



              {
                return( <div className="mainBlogs__2_flex-box">
             <Link className="link" to={{pathname:"/blog/"+blog.id, state:blog}} >go...</Link>
                    <img src={blog.titleImage} alt=""/>
                      <div className="mainBlogs__2_flex-box--title">{blog.shortTitle}</div>
                      <div className="mainBlogs__2_flex-box--content">
                      <td dangerouslySetInnerHTML={{__html:(blog.shortContent)}}  />...
                      </div>
                      <div className="mainBlogs__2_flex-box--date">{blog.date}</div>
                  </div>)

                }


                  )}

                
              </div>
          </div>


          </div>
          

        )
    }
}
