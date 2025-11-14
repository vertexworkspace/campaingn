import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const formType =
      formData.pathname?.includes("/vertex-solutions")
        ? "solutions"
        : "location";

    // LABELS BASED ON PATH
    const inquiryLabel = formType === "solutions" ? "Solution" : "Location";
    const formTitle =
      formType === "solutions"
        ? "Vertex Solutions"
        : "Private Office";

    // 1. Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 2. Admin Notification Email
    const adminMail = {
      from: "Vertex Workspace",
      to: "hashimhx3@gmail.com",
      subject: `New ${formTitle} Form Submission`,
      text: `
      You have a new enquiry from ${formTitle}.
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        ${inquiryLabel}: ${formData.location}
        Company: ${formData.company}
        Team Size: ${formData.teamSize}
        Description: ${formData.description}
      `,
    };

    // 3. User Confirmation Email (your new template)
    const userMail = {
      from: "Vertex Workspace",
      to: formData.email,
      subject: `Thank you for contacting Vertex Workspaces!`,
      html: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>Vertex - Response Email</title><!--[if (mso 16)]>
      <style type="text/css">
         a {text-decoration: none;}
      </style>
      <![endif]--><!--[if gte mso 9]>
      <style>sup { font-size: 100% !important; }</style>
      <![endif]--><!--[if gte mso 9]>
      <noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
      <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if mso]><xml>
    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
      <w:DontUseAdvancedTypographyReadingMail/>
    </w:WordDocument>
    </xml><![endif]-->
  <style type="text/css">#outlook a {
	padding:0;
}
.ch {
	mso-style-priority:100!important;
	text-decoration:none!important;
}
a[x-apple-data-detectors] {
	color:inherit!important;
	text-decoration:none!important;
	font-size:inherit!important;
	font-family:inherit!important;
	font-weight:inherit!important;
	line-height:inherit!important;
}
.bn {
	display:none;
	float:left;
	overflow:hidden;
	width:0;
	max-height:0;
	line-height:0;
	mso-hide:all;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left }      .co p, .co ul li, .co ol li, .co a { font-size:14px!important }   *[class="gmail-fix"] { display:none!important } .ck, .ck h1, .ck h2, .ck h3 { text-align:center!important }  .cl, .cl h1, .cl h2, .cl h3 { text-align:left!important }  .ci { display:inline-block!important } a.ch, button.ch { font-size:18px!important; display:inline-block!important } .ce table, .cf, .cg { width:100%!important } .cb table, .cc table, .cd table, .cb, .cd, .cc { width:100%!important; max-width:600px!important }  .adapt-img { width:100%!important; height:auto!important }  .by { padding-right:0!important }    .bu { padding-bottom:20px!important } .bs, .bt { display:none!important } tr.bn, td.bn, table.bn { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.bn { display:table-row!important }       .bn { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important }                  .v { padding-right:20px!important } .u { padding-left:20px!important }                .e { padding:40px!important }     }
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }</style>
 </head>
 <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#F6F6F6"><!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#f6f6f6"></v:fill>
			</v:background>
		<![endif]-->
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
     <tr>
      <td valign="top" style="padding:0;Margin:0">
       <table class="cb" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr>
          <td align="center" bgcolor="#efefef" style="padding:0;Margin:0;background-color:#efefef">
           <table class="co" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:970px" role="none">
             <tr>
              <td align="left" style="padding:0;Margin:0">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td valign="top" align="center" style="padding:0;Margin:0;width:970px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr class="bs">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://eikmzcx.stripocdn.email/content/guids/CABINET_5456873a2af2655d5b675931f499b06afdb752dcaaa5f05315d782d598608b05/images/logo_header.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="970" height="126"></td>
                     </tr>
                     <tr class="bs">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://eikmzcx.stripocdn.email/content/guids/CABINET_5456873a2af2655d5b675931f499b06afdb752dcaaa5f05315d782d598608b05/images/header.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="970" height="542"></td>
                     </tr><!--[if !mso]><!-- -->
                     <tr class="bn" style="display:none;float:left;overflow:hidden;width:0;max-height:0;line-height:0;mso-hide:all">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://eikmzcx.stripocdn.email/content/guids/CABINET_5456873a2af2655d5b675931f499b06afdb752dcaaa5f05315d782d598608b05/images/logo_header_phone.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="970" height="225"></td>
                     </tr><!--<![endif]--><!--[if !mso]><!-- -->
                     <tr class="bn" style="display:none;float:left;overflow:hidden;width:0;max-height:0;line-height:0;mso-hide:all">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://eikmzcx.stripocdn.email/content/guids/CABINET_5456873a2af2655d5b675931f499b06afdb752dcaaa5f05315d782d598608b05/images/headerphone.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="970" height="984"></td>
                     </tr><!--<![endif]-->
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="cb" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr>
          <td align="center" bgcolor="#efefef" style="padding:0;Margin:0;background-color:#efefef">
           <table bgcolor="#ffffff" class="co" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:970px">
             <tr>
              <td align="left" bgcolor="#ffffff" style="padding:40px;Margin:0;background-color:#ffffff">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:890px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr class="bs">
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:27px;color:#696969;font-size:18px;text-align:left">Hi ${formData?.name},<br><br>Thank you for your interest in Vertex Workspaces! We are happy to help you find your ideal professional setup.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px;display:none"><br></p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr>
              <td class="v u" align="left" bgcolor="#ffffff" style="padding:0;Margin:0;background-color:#ffffff">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:970px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                    <!--[if !mso]><!-- -->
                     <tr class="bn" style="display:none;float:left;overflow:hidden;width:0;max-height:0;line-height:0;mso-hide:all">
                      <td align="center" class="ck v u" style="padding:15px;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;color:#696969;font-size:18px;text-align:left">Hi [Name],</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;color:#696969;font-size:18px;text-align:left">Thank you for your interest in Vertex Workspaces!<br>We are happy to help you find your ideal professional setup.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px;display:none"><br></p></td>
                     </tr><!--<![endif]-->
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr>
              <td align="left" bgcolor="#fcfefd" style="Margin:0;padding-bottom:30px;padding-top:40px;padding-left:40px;padding-right:40px;background-color:#fcfefd">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:890px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" class="cl" style="padding:0;Margin:0;padding-bottom:10px"><h2 style="Margin:0;line-height:28.8px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#666666"><strong>Here are the key highlights of what Vertex offer</strong></h2><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px;display:none"><br></p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="cb" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr>
          <td align="center" bgcolor="#efefef" style="padding:0;Margin:0;background-color:#efefef">
           <table bgcolor="#ffffff" class="co" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:970px">
             <tr>
              <td align="left" bgcolor="#fcfefd" style="padding:40px;Margin:0;background-color:#fcfefd"><!--[if mso]><table style="width:890px" cellpadding="0" cellspacing="0"><tr><td style="width:228px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="cf" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="by bu" align="center" style="padding:0;Margin:0;width:208px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://eikmzcx.stripocdn.email/content/guids/CABINET_5456873a2af2655d5b675931f499b06afdb752dcaaa5f05315d782d598608b05/images/13_workspace.gif" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="128" height="128"></td>
                     </tr>
                     <tr>
                      <td align="center" class="cl" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:27px;color:#696969;font-size:18px"><strong>Premium &amp; Ergonomic</strong></p></td>
                     </tr>
                     <tr>
                      <td align="center" class="cl" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#696969;font-size:16px">Modern coworking environment with comfortable setups.</p></td>
                     </tr>
                   </table></td>
                  <td class="bt" style="padding:0;Margin:0;width:20px"></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:228px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="cf" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="bu" align="center" style="padding:0;Margin:0;width:208px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://eikmzcx.stripocdn.email/content/guids/CABINET_5456873a2af2655d5b675931f499b06afdb752dcaaa5f05315d782d598608b05/images/08_electricity.gif" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="128" height="128"></td>
                     </tr>
                     <tr>
                      <td align="center" class="cl" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:27px;color:#696969;font-size:18px"><strong>Always On</strong></p></td>
                     </tr>
                     <tr>
                      <td align="center" class="cl" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#696969;font-size:16px">24/7 access, high-speed internet, and reliable power backup.</p></td>
                     </tr>
                   </table></td>
                  <td class="bt" style="padding:0;Margin:0;width:20px"></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:207px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="cf" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="bu" align="center" style="padding:0;Margin:0;width:207px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://eikmzcx.stripocdn.email/content/guids/CABINET_5456873a2af2655d5b675931f499b06afdb752dcaaa5f05315d782d598608b05/images/20_job_interview.gif" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="128" height="128"></td>
                     </tr>
                     <tr>
                      <td align="center" class="cl" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:27px;color:#696969;font-size:18px"><strong>Collaborative Zone</strong></p></td>
                     </tr>
                     <tr>
                      <td align="center" class="cl" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#696969;font-size:16px">Dedicated meeting rooms and conference areas.</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:207px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="cg" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="center" style="padding:0;Margin:0;width:207px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://eikmzcx.stripocdn.email/content/guids/CABINET_5456873a2af2655d5b675931f499b06afdb752dcaaa5f05315d782d598608b05/images/composition.gif" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="128" height="128"></td>
                     </tr>
                     <tr>
                      <td align="center" class="cl" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:27px;color:#696969;font-size:18px"><strong>Prime Location</strong></p></td>
                     </tr>
                     <tr>
                      <td align="center" class="cl" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#696969;font-size:16px">Easy connectivity for you and your clients.</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
             <tr>
              <td align="left" bgcolor="#ffffff" style="Margin:0;padding-top:20px;padding-bottom:30px;padding-left:40px;padding-right:40px;background-color:#ffffff">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:890px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" class="cl" style="padding:0;Margin:0;padding-bottom:10px"><h2 style="Margin:0;line-height:28.8px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#666666"><strong>Ready to see space?&nbsp;</strong></h2><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px;display:none"><br></p></td>
                     </tr>
                     <tr class="bs">
                      <td align="center" class="cl" style="padding:0;Margin:0;padding-bottom:10px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:27px;color:#696969;font-size:18px;text-align:center">We highly recommend scheduling your free site visit today to explore the environment in person and choose the perfect desk.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px;display:none"><br></p></td>
                     </tr><!--[if !mso]><!-- -->
                     <tr class="bn" style="display:none;float:left;overflow:hidden;width:0;max-height:0;line-height:0;mso-hide:all">
                      <td align="center" class="cl" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:27px;color:#696969;font-size:18px;text-align:left">We highly recommend scheduling your free site visit today to explore the environment in person and choose the perfect desk.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px;display:none"><br></p></td>
                     </tr><!--<![endif]-->
                     <tr class="bs">
                      <td align="center" class="ck e" style="padding:0;Margin:0;padding-top:25px"><span class="ci" style="border-style:solid;border-color:#2cb543;background:#0097dc;border-width:0px;display:inline-block;border-radius:0px;width:auto"><a href="https://wa.me/9611730555" class="ch" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;padding:20px;display:inline-block;background:#0097dc;border-radius:0px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:21.6px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid #0097dc">Contact Us</a></span></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="cb" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr>
          <td align="center" bgcolor="#efefef" style="padding:0;Margin:0;background-color:#efefef">
           <table bgcolor="#ffffff" class="co" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:970px">
             <tr>
              <td align="left" style="padding:0;Margin:0">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:970px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                    <!--[if !mso]><!-- -->
                     <tr class="bn" style="display:none;float:left;overflow:hidden;width:0;max-height:0;line-height:0;mso-hide:all">
                      <td align="left" class="e cl" style="padding:0;Margin:0"><span class="ci" style="border-style:solid;border-color:#2cb543;background:#0097dc;border-width:0px;display:inline-block;border-radius:0px;width:auto"><a href="" class="ch" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;padding:20px;display:inline-block;background:#0097dc;border-radius:0px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:21.6px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid #0097dc">Contact Us</a></span></td>
                     </tr><!--<![endif]-->
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="cb" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr>
          <td align="center" bgcolor="#efefef" style="padding:0;Margin:0;background-color:#efefef">
           <table bgcolor="#ffffff" class="co" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:970px">
             <tr>
              <td align="left" style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#0097dc" bgcolor="#0097DC">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:930px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr class="bs">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://eikmzcx.stripocdn.email/content/guids/CABINET_5456873a2af2655d5b675931f499b06afdb752dcaaa5f05315d782d598608b05/images/footer_logo_header.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="560" height="73"></td>
                     </tr><!--[if !mso]><!-- -->
                     <tr class="bn" style="display:none;float:left;overflow:hidden;width:0;max-height:0;line-height:0;mso-hide:all">
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://eikmzcx.stripocdn.email/content/guids/CABINET_5456873a2af2655d5b675931f499b06afdb752dcaaa5f05315d782d598608b05/images/footer_logo_header_phone.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="560" height="130"></td>
                     </tr><!--<![endif]-->
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table>
  </div>
 </body>
</html>
      `,
    };

    // 4. Send Emails
    // await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return NextResponse.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, message: "Email sending failed", error });
  }
}
