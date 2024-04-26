
  import React from "react";
import { Helmet } from 'react-helmet';
  import { Heading, Img, Button } from "../../components"
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar"

  
 const data = [{"comictwo":"Comic","horrortwo":"Horror","romancetwo":"Romance"},{"comictwo":"Fiksi","horrortwo":"Religi","romancetwo":"Cooking"},{"comictwo":"Sains","horrortwo":"Teknology","romancetwo":"animal"}]
  
  
  
  
  export default function DesktopThreePage(){

    const [collapsed, setCollapsed] = React.useState(false);

    //use this function to collapse/expand the sidebar
//function collapseSidebar() {
//    setCollapsed(!collapsed)
//}

    return (
      <>
        <Helmet>
          <title>Ubook Home - Explore Books, Comics, and Educational Content</title>
          <meta name="description" content="Welcome to Ubook's home page, your hub for exploring a diverse collection of books and genres like Horror, Romance, Science, and Technology. Start browsing now!" />
        </Helmet> 
        

  {/* main layout section */}<div className="flex w-full items-start justify-between gap-5 bg-[#ffffff] md:flex-col">


{/* sidebar navigation section */}<Sidebar width="236px !important" collapsedWidth="80px !important" collapsed={collapsed} className="!sticky top-0 flex h-screen flex-col overflow-auto bg-[#edc6b1] py-[31px] md:hidden md:p-5 sm:py-5"/>


{/* logo section */}<Img src="images/img_logo.svg" alt="logo_one" className="h-[77px] w-full md:h-auto" />


{/* navigation menu section */}<Menu menuItemStyles={{ button: {
      "padding":0,"alignSelf":"start","color":"#7c96ab","textAlign":"center","fontWeight":700,"fontSize":"24px","gap":"20px","paddingLeft":"17px","paddingRight":"17px",
      
    } }} rootStyles={{  ["&>ul"]: {"gap":"48px"} }} className="mt-[97px] flex w-full flex-col self-stretch pb-[18px]">


{/* home menu item section */}<MenuItem icon={<Img src="images/img_home.svg" alt="home_one" className="h-[48px] w-[48px]" />
}>
Home</MenuItem>


{/* search menu item section */}<MenuItem icon={<Img src="images/img_search_blue_gray_400.svg" alt="search_one" className="h-[48px] w-[40px]" />
}>
Search</MenuItem>


{/* profile menu item section */}<MenuItem icon={<Img src="images/img_user.svg" alt="user_one" className="h-[48px] w-[48px]" />
}>
Profile</MenuItem>
</Menu>
{!collapsed ? 

{/* search bar section */}<div :className="mt-[30px] flex items-center gap-5">
<Img src="images/img_search.svg" alt="search_four" className="h-[36px]" />
<Heading as="h4" className="self-end">
Setting</Heading>
</div>
 : null}{!collapsed ? <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">


{/* logout section */}<div className="ml-[23px] mt-[410px] flex items-center gap-[17px] self-start md:ml-0">
<Img src="images/img_power_button.svg" alt="powerbutton_one" className="h-[48px] w-[48px]" />
<Heading as="h4" className="mb-1.5 self-end">
Log Out</Heading>
</div>
</a>
 : null}{!collapsed ? 

{/* footer copyright section */}<div className="mt-[34px] flex flex-col items-center gap-[9px]">
<Heading size="xs" as="p">
© 2024 - Learning platform</Heading>
<Heading size="xs" as="p" className="text-center">
All rights reserved</Heading>
</div>
 : null}</Sidebar>


{/* content area section */}<div className="mt-[46px] flex w-[75%] flex-col items-end gap-[92px] md:w-full md:gap-[69px] md:p-5 sm:gap-[46px]">;


{/* user notification section */}<div className="mr-3 flex items-center gap-6 pr-[18px] md:mr-0">


{/* notification icon section */}<div className="flex flex-col rounded-[22px] bg-[#edc6b1]">
<Img src="images/img_bell.svg" alt="bell_one" className="h-[48px] rounded-tl-[22px] rounded-tr-[22px]" />
</div>;


{/* user profile summary section */}<div className="flex items-start gap-7 self-start pr-4">
<Button color="deep_orange_100" size="xs" shape="circle" className="w-[44px] !rounded-[22px]">
<Img src="images/img_user_blue_gray_900.svg" />
</Button>
<Heading as="h1" className="mt-[5px] text-center capitalize">
Fitria</Heading>
</div>


{/* shopping cart section */}<div className="flex items-center gap-[19px] self-start">
<div className="flex flex-col rounded-[22px] bg-[#edc6b1]">
<Img src="images/img_cart.svg" alt="cart_one" className="h-[44px] rounded-tl-[22px] rounded-tr-[22px]" />
</div>
<Heading as="h2" className="mb-1 self-end text-center capitalize">
Shop</Heading>
</div>
</div>
<div className="flex flex-col gap-[93px] self-stretch">
{data.map((d,index) => (

{/* genre list section */}<div key)={"desktopthree" + index} className="flex flex-1 items-start justify-between gap-5 sm:flex-col">
<div className="flex w-[18%] items-center gap-2.5 sm:w-full">
<Img src="images/img_rocket.svg" alt="comic_one" className="h-[46px] w-[31%]" />
<Heading as="h2">
{d.comictwo}</Heading>
</div>
<div className="flex items-center gap-1.5 pr-[5px]">
<Img src="images/img_face_neutral.svg" alt="horror_one" className="h-[41px]" />
<Heading as="h3">
{d.horrortwo}</Heading>
</div>
<div className="flex items-center gap-3 pr-[7px]">
<Img src="images/img_heart.svg" alt="romance_one" className="h-[40px]" />
<Heading as="h4">
{d.romancetwo}</Heading>
</div>
</div>
 ))}</div>
</div>
</div>

      </>
)
  }