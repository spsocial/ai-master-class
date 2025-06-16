import React, { useState } from 'react';
import { Video, Image, Sparkles, BookOpen, Palette, Camera, Film, Bot, ChevronRight, Search, Menu, X, Sun, Moon, GraduationCap, Zap, Target, ArrowRight, Layers, Music, Gift, Copy, CheckCircle } from 'lucide-react';

const AIContentCourse = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPracticeModal, setShowPracticeModal] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(null);
  const [showTemplateGenerator, setShowTemplateGenerator] = useState(false);

  const copyToClipboard = (text, templateId) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedTemplate(templateId);
      setTimeout(() => setCopiedTemplate(null), 2000);
    });
  };

  const aiTools = {
    chatgpt: { name: 'ChatGPT', url: 'https://chatgpt.com/', desc: 'เขียน prompt คิดคอนเทนต์ และเป็นผู้ช่วยทุกด้าน' },
    gemini: { name: 'Gemini', url: 'https://gemini.google.com/', desc: 'Gen วิดีโอฟรี 3 ครั้ง/วัน' },
    aistudio: { name: 'AI Studio', url: 'https://aistudio.google.com/', desc: 'พากย์เสียงด้วย AI ฟรี' },
    heygen: { name: 'HeyGen', url: 'https://app.heygen.com/', desc: 'ลิปซิงค์เสียง / พากย์เสียง' },
    midjourney: { name: 'Midjourney', url: 'https://www.midjourney.com/', desc: 'สร้างภาพฉาก โมเดล สมจริง' },
    labs: { name: 'Google Labs', url: 'https://labs.google/', desc: 'สร้างวิดีโอมืออาชีพ (Veo 3)' },
    suno: { name: 'Suno', url: 'https://suno.com/', desc: 'ทำเพลงด้วย AI' },
    capcut: { name: 'CapCut', url: 'https://www.capcut.com/', desc: 'ตัดต่อวิดีโอฟรี มี Effects มากมาย' }
  };

  const lessons = [
    {
      id: 'intro',
      title: 'Welcome to AI Master Class',
      icon: <Sparkles className="w-5 h-5" />,
      description: 'เริ่มต้นการเป็น AI Content Creator',
      content: {
        overview: 'ยินดีต้อนรับสู่ AI Master Class! คอร์สนี้จะพาคุณเป็นมืออาชีพในการสร้างคอนเทนต์ด้วย AI Tools ชั้นนำ ตั้งแต่การสร้างภาพ วิดีโอ จนถึงการตัดต่อแบบครบวงจร',
        topics: [
          'Overview: Midjourney, ChatGPT 4o, Veo 3, CapCut, Kling AI',
          'การเตรียมตัวและ Setup Tools ต่างๆ',
          'Mindset ของ AI Content Creator',
          'โอกาสและอนาคตของอาชีพนี้'
        ],
        examples: [
          { type: 'tip', text: 'เริ่มต้นด้วยการสมัคร Account ของแต่ละ Tool และทำความคุ้นเคยกับ Interface' },
          { type: 'code', text: `🛠️ Tools ที่ต้องเตรียม:
1. Midjourney - สมัครผ่าน Discord
2. ChatGPT Plus - สำหรับ GPT-4o with Vision
3. Google Veo 3 - ผ่าน Google Labs
4. CapCut - Download ฟรี
5. Kling AI - สมัครรอ Access` },
          { type: 'tools', text: 'คลิกปุ่ม "เริ่มฝึกปฏิบัติ" ด้านล่างเพื่อเข้าถึง Tools ทั้งหมด' }
        ]
      }
    },
    {
      id: 'video',
      title: 'Video Creation with Veo 3',
      icon: <Video className="w-5 h-5" />,
      description: 'สร้างวิดีโอด้วย Google Veo 3',
      content: {
        overview: 'Google Veo 3 เป็น AI ที่สร้างวิดีโอจาก text prompt ได้อย่างน่าทึ่ง มาเรียนรู้วิธีเขียน prompt ที่ได้ผลดีที่สุด',
        topics: [
          'โครงสร้าง Shot-Based Prompt',
          'การกำหนด Camera Angles',
          'การเขียนบทพูดภาษาไทย',
          'เทคนิคหลีกเลี่ยง Physics Issues'
        ],
        examples: [
          { type: 'code', text: `📍 Scene Overview:
Modern Bangkok office at golden hour

👤 Characters:
45-year-old Thai businessman, navy suit

🎬 SHOT 1 (0-3s):
• Camera: Wide shot
• Action: Enters room confidently
• SFX: Door opening` },
          { type: 'tip', text: 'ใช้ "ALREADY POSITIONED" เพื่อหลีกเลี่ยงการเดินทะลุวัตถุ' },
          { type: 'tools', text: '🔗 เข้าใช้งาน Google Veo 3 ได้ที่ https://labs.google/ และ Gemini ที่ https://gemini.google.com/' }
        ]
      }
    },
    {
      id: 'camera-techniques',
      title: '🎥 Professional Camera Techniques',
      icon: <Camera className="w-5 h-5" />,
      description: 'เทคนิคมุมกล้องระดับ Hollywood สำหรับ AI',
      content: {
        overview: 'เรียนรู้เทคนิคการถ่ายทำระดับมืออาชีพ 6 เทคนิคหลัก พร้อมคำศัพท์ที่ใช้ในวงการภาพยนตร์ นำไปใช้กับ Veo 3, Runway, Pika Labs และ AI Video tools อื่นๆ ได้ทันที',
        topics: [
          '6 เทคนิคมุมกล้องหลักที่ต้องรู้',
          'Camera Movement แบบต่างๆ',
          'Camera Angles ทุกมุมมอง',
          'Visual Style Keywords',
          'วิธี Mix & Match เทคนิค',
          'ตัวอย่าง Prompt สำเร็จรูป'
        ],
        examples: [
          { type: 'code', text: `🎬 6 เทคนิคมุมกล้องหลักสำหรับ AI Video

1. 🔄 Orbit Shot (ออร์-บิท-ช็อต)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
คืออะไร: กล้องเคลื่อนที่เป็นวงกลม "โคจร" รอบๆ วัตถุ 360 องศา
เหมาะกับ: Product showcase, Character reveal, 360 view
วิธีใช้: "orbit shot of [subject], smooth 360 degree rotation"
ตัวอย่าง: "orbit shot of luxury watch on pedestal, golden hour lighting"

2. 🔍 Extreme Close-Up (เอ็กซ์-ทรีม-โคลส-อัป) 
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
คืออะไร: ถ่ายภาพระยะใกล้สุดๆ เน้นรายละเอียดเล็กๆ
เหมาะกับ: Texture, Logo, Quality details, Emotion
วิธีใช้: "extreme close-up on [detail], macro lens, shallow DOF"
ตัวอย่าง: "extreme close-up on diamond ring, light refraction visible"

3. 🎥 Gliding/Dolly Shot (ไกลด์-ดิ้ง/ดอล-ลี่-ช็อต)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
คืออะไร: กล้องเคลื่อนที่ราบรื่นเหมือนอยู่บนราง
เหมาะกับ: Luxury feel, Smooth reveal, Following action
วิธีใช้: "smooth dolly shot [direction], gliding movement"
ตัวอย่าง: "dolly in towards model, smooth gliding motion"

4. ⏱️ Slow-Motion (สโลว์-โม-ชั่น)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
คืออะไร: ภาพเคลื่อนไหวช้ากว่าปกติ เน้นความสวยงาม
เหมาะกับ: Water splash, Hair flow, Explosion, Dramatic moments
วิธีใช้: "[action] in slow-motion, 120fps"
ตัวอย่าง: "pouring honey in extreme slow-motion, 240fps"

5. 🦸 Heroic Shot (ฮี-โร-อิค-ช็อต)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
คืออะไร: มุมกล้องที่ทำให้ดูยิ่งใหญ่ สง่างาม
เหมาะกับ: Product glory, Power pose, Final shot
วิธีใช้: "heroic low-angle shot of [subject], dramatic lighting"
ตัวอย่าง: "heroic shot of perfume bottle, backlit with golden rays"

6. 🎞️ Cinematic Montage (ซิ-เน-มา-ติค-มอน-ทาจ)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
คืออะไร: รวมหลาย shots ตัดต่อเข้าด้วยกันอย่างลื่นไหล
เหมาะกับ: Dynamic showcase, Story progression, Energy
วิธีใช้: "cinematic montage of [subject], dynamic cuts"
ตัวอย่าง: "fast-paced montage of coffee making process"` },
          { type: 'code', text: `📐 Camera Angles & Movement Dictionary

🎯 CAMERA MOVEMENT (การเคลื่อนกล้อง)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Pan - หมุนกล้องซ้าย-ขวา (แนวนอน)
• Tilt - หมุนกล้องขึ้น-ลง (แนวตั้ง)
• Zoom - ซูมเข้า-ออก
• Dolly - เคลื่อนกล้องเข้า-ออกจากวัตถุ
• Truck/Track - เคลื่อนกล้องไปด้านข้าง
• Crane/Jib - กล้องเคลื่อนขึ้น-ลงแบบเครน
• Handheld - กล้องมือ มีการสั่นเบาๆ
• Steadicam - กล้องเคลื่อนที่แต่นิ่งมาก

📸 CAMERA ANGLES (มุมกล้อง)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Eye Level - ระดับสายตา (ปกติ)
• High Angle - มุมสูง มองลงมา
• Low Angle - มุมต่ำ มองขึ้นไป
• Bird's Eye View - มองจากด้านบนตรงๆ
• Worm's Eye View - มองจากด้านล่างสุด
• Dutch Angle - กล้องเอียง (สร้างความไม่สมดุล)
• Over-the-Shoulder (OTS) - ข้ามไหล่
• Point of View (POV) - มุมมองสายตาตัวละคร

🎨 SHOT SIZES (ขนาดภาพ)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Extreme Wide Shot (EWS) - ไกลมากๆ
• Wide Shot (WS) - ภาพกว้าง
• Medium Wide Shot (MWS) - กว้างปานกลาง
• Medium Shot (MS) - ระยะกลาง
• Medium Close-Up (MCU) - ใกล้ปานกลาง
• Close-Up (CU) - ระยะใกล้
• Extreme Close-Up (ECU) - ใกล้มากๆ` },
          { type: 'code', text: `🎨 Visual Style Keywords สำหรับ AI

💡 LIGHTING STYLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Cinematic lighting - แสงแบบภาพยนตร์
• Moody atmosphere - บรรยากาศลึกลับ
• High-contrast - แสงเงาตัดกันชัด
• Soft diffused light - แสงนุ่มกระจาย
• Dramatic shadows - เงาดราม่า
• Golden hour - แสงทอง (เช้า/เย็น)
• Blue hour - แสงน้ำเงิน (ก่อนพระอาทิตย์ขึ้น/หลังตก)
• Rim lighting - แสงขอบ
• Backlit - แสงย้อน

🎬 CINEMATIC TERMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Depth of field - ระยะชัดลึก
• Shallow DOF - โฟกัสตื้น (พื้นหลังเบลอ)
• Deep focus - โฟกัสลึก (ชัดทั้งภาพ)
• Bokeh - วงกลมเบลอสวยๆ
• Lens flare - แสงแฟลร์
• Motion blur - ภาพเบลอจากการเคลื่อนไหว
• Rack focus - เปลี่ยนโฟกัส
• Pull focus - ดึงโฟกัส

🎭 MOOD & ATMOSPHERE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Epic - ยิ่งใหญ่
• Intimate - ใกล้ชิด
• Mysterious - ลึกลับ
• Dreamy - ฝันๆ
• Gritty - หยาบกร้าน
• Ethereal - เหนือจริง
• Noir - มืดทะมึน
• Vibrant - สดใส` },
          { type: 'code', text: `🚀 Mix & Match Techniques - สูตรสำเร็จ

📦 PRODUCT SHOWCASE FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Start with orbit shot revealing product +
extreme close-up on logo detail +
slow-motion liquid/particle effects +
end with heroic low-angle shot"

ตัวอย่าง Prompt:
"Orbit shot around luxury perfume bottle on marble pedestal,
transitioning to extreme close-up on crystal cap with light
refraction. Cut to slow-motion mist particles floating in air,
120fps. Final heroic shot from low angle, dramatic backlighting,
shallow depth of field with bokeh background"

🎬 DYNAMIC ACTION FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Handheld following shot +
quick pan to reveal +
slow-motion impact moment +
wide establishing shot"

ตัวอย่าง Prompt:
"Handheld tracking shot following athlete running, dynamic
camera shake. Quick pan right revealing finish line ahead.
Slow-motion 240fps as runner breaks through ribbon. Pull
back to wide shot showing cheering crowd, golden hour lighting"

✨ LUXURY/PREMIUM FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Smooth dolly in +
selective focus details +
gliding orbit shot +
elegant slow reveal"

ตัวอย่าง Prompt:
"Slow dolly in towards luxury watch, shallow depth of field.
Rack focus from background to watch face detail. Smooth
gliding orbit shot with rim lighting. Elegant tilt up
revealing full product against black velvet background"` },
          { type: 'tip', text: '💡 Pro Tip: ใช้คำว่า "cinematic" นำหน้า prompt เพื่อให้ได้คุณภาพแบบภาพยนตร์ เช่น "cinematic orbit shot"' },
          { type: 'warning', text: '⚠️ หลีกเลี่ยงการใช้เทคนิคมากเกินไปใน shot เดียว ควรเลือก 2-3 เทคนิคที่เข้ากันได้ดี' },
          { type: 'tools', text: '🔗 ใช้เทคนิคเหล่านี้ได้กับ: Veo 3, Runway, Pika Labs, Stable Video Diffusion และ AI video tools อื่นๆ' }
        ]
      }
    },
    {
      id: 'consistency-techniques',
      title: '🎯 Character & Product Consistency',
      icon: <Target className="w-5 h-5" />,
      description: 'เทคนิคล็อคหน้าตัวละครและสินค้าให้เหมือนเดิมทุกคลิป',
      content: {
        overview: 'เรียนรู้เทคนิคระดับเทพที่มือโปรใช้ในการ "ล็อค" หน้าตาตัวละครและสินค้าให้เหมือนเดิมในทุกๆ คลิป ตั้งแต่การสร้าง Character Sheet ไปจนถึงการใช้ Image Reference',
        topics: [
          'การสร้าง Character Sheet แบบมืออาชีพ',
          'เทคนิคการตั้งชื่อเพื่อความต่อเนื่อง',
          'การล็อคฉากและเสื้อผ้า',
          'การใช้ Image Reference (ท่าไม้ตาย)',
          'Workflow ระดับโปร: Pre-Production to Production',
          'Tips & Tricks จากมือโปร'
        ],
        examples: [
          { type: 'code', text: `🎯 เทคนิคที่ 1: สร้าง "ใบประวัติ" (Character Sheet)

❌ แบบธรรมดา (AI จำไม่ได้):
"A young man in a studio"
"A man sitting at desk"
"Someone working on computer"

✅ แบบมือโปร (AI จำได้แม่น):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHARACTER PROFILE: CHAI
• Name: Chai (ชัย)
• Age: 20 years old
• Ethnicity: Thai
• Face: Handsome, symmetrical features, warm smile
• Hair: Short black hair, modern style, slightly styled upward
• Build: Athletic, 175cm tall
• Outfit: Black t-shirt with small white logo on chest, 
  dark blue jeans, white sneakers
• Accessories: Silver watch on left wrist, thin silver necklace
• Personality: Confident, friendly, tech-savvy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 หลักการ: Copy Character Profile นี้ใส่ในทุก Prompt!` },
          { type: 'code', text: `🏷️ เทคนิคที่ 2: "ตั้งชื่อ" คือเวทมนตร์

การตั้งชื่อทำหน้าที่เหมือน "ตัวแปร" ในการเขียนโปรแกรม:

แทนที่จะเขียนยาวๆ ทุกครั้ง:
"The 20-year-old Thai man with short black hair wearing 
black t-shirt and jeans walks into the room"

ใช้แค่นี้:
"Chai walks into the room"

ตัวอย่างการใช้งาน:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Scene 1: "Chai sits at his gaming desk, excited"
Scene 2: "Chai picks up the product, examining it"
Scene 3: "Chai shows the product to camera, smiling"
Scene 4: "Chai gives thumbs up, still in same outfit"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ AI จะเข้าใจว่าเรากำลังพูดถึง "ชัย" คนเดิม!` },
          { type: 'code', text: `🏠 เทคนิคที่ 3: ล็อคฉากและเสื้อผ้า

📍 LOCATION CONSISTENCY:
ใช้คำเหล่านี้ในทุก Prompt:
• "in the same [location]..."
• "back in his studio..."
• "still in the modern office..."

ตัวอย่าง Location Profile:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STUDIO SETTING:
• Type: Modern gaming/tech review studio
• Lighting: RGB Nanoleaf panels on dark wall
• Desk: White minimal desk with LED strips
• Background: Dark gray acoustic panels
• Props: Mechanical keyboard, dual monitors
• Ambiance: Moody blue/purple lighting
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👕 OUTFIT CONSISTENCY:
• "wearing his signature [outfit]..."
• "still in the same [clothes]..."
• "dressed in his usual [description]..."

Pro Tip: สร้าง "Signature Look" ให้ตัวละคร
เช่น "Chai's signature black t-shirt with logo"` },
          { type: 'code', text: `🖼️ เทคนิคที่ 4: Image Reference (ท่าไม้ตาย!)

นี่คือวิธีที่ดีที่สุดในการรักษา Consistency:

📸 STEP 1: สร้างภาพต้นแบบ (Master Image)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. ใช้ Midjourney/DALL-E/Stable Diffusion
2. Prompt: "[Character Profile ทั้งหมด], professional 
   photography, perfect lighting, high detail"
3. เลือกภาพที่ดีที่สุด เซฟไว้เป็น Reference

📤 STEP 2: อัปโหลดและอ้างอิง
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
การเขียน Prompt เมื่อมี Reference:

"Using the uploaded reference image as the character:
Chai (the exact man from the reference) sits at his desk,
maintaining identical facial features, hairstyle, and outfit
as shown in the reference image. He smiles at camera."

คำสำคัญที่ต้องใช้:
• "exact same person from reference"
• "identical features as uploaded image"
• "maintaining consistency with reference"
• "must match the reference character"` },
          { type: 'code', text: `🎬 Workflow ระดับโปร: Step-by-Step

🎯 PHASE 1: PRE-PRODUCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Character Design:
   □ เขียน Character Profile ละเอียด
   □ สร้าง Master Image ด้วย AI
   □ เซฟ Reference หลายมุม (ถ้าทำได้)

2. Product/Props:
   □ ถ่ายภาพสินค้าจริง หรือ
   □ สร้าง Product Reference ด้วย AI
   □ เตรียม Multiple Angles

3. Location Setup:
   □ เขียน Location Description
   □ สร้าง Background Reference
   □ กำหนด Lighting Scheme

📹 PHASE 2: PRODUCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
คลิปที่ 1 (Establishing):
"[Upload all references]
Introducing Chai, the 20-year-old Thai tech reviewer
[Full character description]. He sits in his signature
gaming studio [Full location description]..."

คลิปที่ 2-N (Continuing):
"[Upload same references]
Chai (from reference) continues his review...
Same studio, same outfit, same lighting..."

🔄 CONSISTENCY CHECKLIST:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ ใช้ชื่อตัวละครทุกครั้ง
□ อ้างอิง "same/identical" บ่อยๆ
□ Upload reference ทุกคลิป
□ ใช้ Character Profile เดิม
□ ระบุ Location แบบเดิม
□ เน้นย้ำ Outfit consistency` },
          { type: 'code', text: `💡 Pro Tips & Advanced Tricks

🎯 NAMING CONVENTION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Project: TechReview_iPhone15
├── Char_Chai_Reference_01.jpg
├── Char_Chai_Reference_02.jpg
├── Product_iPhone15_Front.jpg
├── Product_iPhone15_Back.jpg
├── Studio_Wide_Reference.jpg
└── Character_Sheet_Chai.txt

🔥 POWER PHRASES สำหรับ Consistency:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• "Maintaining exact continuity from previous scene"
• "Identical to established character design"
• "Consistent with all prior appearances"
• "Preserving character model integrity"
• "Locked to reference specifications"

⚡ TROUBLESHOOTING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ปัญหา: หน้าตาเปลี่ยนไปเล็กน้อย
แก้ไข: เพิ่ม "facial features MUST be identical"

ปัญหา: เสื้อผ้าไม่เหมือนเดิม
แก้ไข: "wearing the EXACT SAME outfit as reference"

ปัญหา: ฉากหลังเปลี่ยน
แก้ไข: "in the IDENTICAL studio setup"

🎪 BONUS TECHNIQUE - Multi-Character:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ถ้ามีหลายตัวละคร ใช้ระบบ ID:
• Chai (ID: MainHost) - ผู้ดำเนินรายการหลัก
• Som (ID: Guest01) - แขกรับเชิญ
• Product (ID: iPhone15Pro) - สินค้าหลัก

Prompt: "Chai (MainHost) hands the iPhone15Pro 
to Som (Guest01), both maintaining their 
established character designs"` },
          { type: 'tip', text: '🎨 สร้าง "Style Guide" เก็บไว้ใน Google Docs พร้อมรูป Reference ทั้งหมด เพื่อให้ทีมใช้ร่วมกันได้' },
          { type: 'warning', text: '⚠️ อย่าลืม Upload Reference ทุกครั้ง! แม้จะเป็นคลิปต่อเนื่องก็ตาม AI ไม่มี Memory ข้ามคลิป' },
          { type: 'tools', text: '🔗 Tools แนะนำ: Midjourney (สร้าง Reference), Google Drive (เก็บ Assets), Notion (ทำ Character Bible)' }
        ]
      }
    },
    {
      id: 'image',
      title: 'Image Generation',
      icon: <Image className="w-5 h-5" />,
      description: 'สร้างภาพด้วย AI (Midjourney, DALL-E)',
      content: {
        overview: 'การสร้างภาพด้วย AI เป็นทักษะสำคัญสำหรับ Content Creator ยุคใหม่ มาเรียนรู้เทคนิคการเขียน prompt ที่ได้ภาพสวยงาม',
        topics: [
          'Prompt Structure สำหรับภาพ',
          'Art Styles และ Keywords สำคัญ',
          'Aspect Ratios และ Parameters',
          'การ Upscale และ Variations'
        ],
        examples: [
          { type: 'code', text: `a professional Thai businesswoman in modern office, 
cinematic lighting, shallow depth of field, 
shot on Sony A7III, corporate photography 
--ar 16:9 --v 6 --style raw` },
          { type: 'tip', text: 'เพิ่ม "shot on [camera]" เพื่อได้ภาพแบบ photography' }
        ]
      }
    },
    {
      id: 'writing',
      title: 'ChatGPT 4o Mastery',
      icon: <Bot className="w-5 h-5" />,
      description: 'ใช้ ChatGPT 4o สร้างเนื้อหาและรีมิกซ์รูป',
      content: {
        overview: 'ChatGPT 4o มีความสามารถพิเศษในการวิเคราะห์และแก้ไขรูปภาพ รวมถึงการสร้าง Content ที่มีคุณภาพสูง เรียนรู้การใช้งานแบบมืออาชีพ',
        topics: [
          'Image Analysis และ Remix Techniques',
          'Product Composite และ Background Removal',
          'การเขียน Prompt สำหรับงานรูปภาพ',
          'Content Writing และ Script Generation'
        ],
        examples: [
          { type: 'code', text: `Image Remix Prompt:
"วิเคราะห์รูปสินค้านี้และช่วยปรับปรุง:
1. ลบพื้นหลังออกให้สะอาด
2. เพิ่ม drop shadow แบบ professional
3. ปรับสีให้ดู vibrant ขึ้น
4. แนะนำมุมถ่ายที่ดีกว่า"` },
          { type: 'code', text: `Product Description Prompt:
Role: E-commerce Copywriter ผู้เชี่ยวชาญ
Task: เขียนคำอธิบายสินค้า [ชื่อสินค้า]
- จุดเด่น 3-5 ข้อ (bullet points)
- คำอธิบายละเอียด 100 คำ
- CTA ที่น่าสนใจ
Tone: น่าเชื่อถือ โน้มน้าวใจ` },
          { type: 'tip', text: 'Upload รูปหลายรูปพร้อมกันใน ChatGPT 4o เพื่อให้ AI เปรียบเทียบและแนะนำรูปที่ดีที่สุด' },
          { type: 'tools', text: '🔗 เข้าใช้งาน ChatGPT ได้ที่ https://chatgpt.com/' }
        ]
      }
    },
    {
      id: 'design',
      title: 'Image & Product Creation',
      icon: <Camera className="w-5 h-5" />,
      description: 'สร้างภาพและรีมิกซ์สินค้าด้วย AI',
      content: {
        overview: 'เรียนรู้การใช้ Midjourney สร้างฉาก โมเดล และโลโก้ รวมถึงการใช้ ChatGPT 4o ในการรีมิกซ์รูปสินค้าให้ดูโปรเฟสชั่นนัล',
        topics: [
          'Midjourney: สร้างฉากพื้นหลังสินค้า',
          'Midjourney: สร้างโมเดลและ Lifestyle shots',
          'Midjourney: ออกแบบโลโก้และ Brand Identity',
          'ChatGPT 4o: รีมิกซ์และ Composite รูปสินค้า'
        ],
        examples: [
          { type: 'code', text: `Midjourney Prompt สำหรับฉากสินค้า:
modern minimalist product photography setup, 
white marble surface, soft natural lighting, 
shallow depth of field, luxury aesthetic
--ar 16:9 --v 6 --style raw` },
          { type: 'code', text: `ChatGPT 4o Image Remix:
"นำรูปสินค้านี้ไปวางบนฉากที่สร้างจาก Midjourney
ปรับแสงเงาให้เข้ากัน เพิ่ม reflection 
และทำให้ดูเป็นภาพถ่ายเดียวกัน"` },
          { type: 'tip', text: 'ใช้ --no [สิ่งที่ไม่ต้องการ] ใน Midjourney เพื่อหลีกเลี่ยงองค์ประกอบที่ไม่ต้องการ' },
          { type: 'tools', text: '🔗 เข้าใช้งาน Midjourney ได้ที่ https://www.midjourney.com/' }
        ]
      }
    },
    {
      id: 'video-edit',
      title: 'Video Editing & Effects',
      icon: <Film className="w-5 h-5" />,
      description: 'ตัดต่อวิดีโอและใส่ Sound Effects',
      content: {
        overview: 'ใช้ CapCut ในการตัดต่อวิดีโอจาก AI ให้สมบูรณ์ เพิ่ม Sound Effects และ Transitions ที่เหมาะสม',
        topics: [
          'CapCut: การตัดต่อพื้นฐานและ Timeline',
          'Sound Effects และการจัดการเสียง',
          'Transitions และ Visual Effects',
          'Export Settings สำหรับแต่ละ Platform'
        ],
        examples: [
          { type: 'tip', text: 'ใช้ Keyframe ใน CapCut เพื่อทำ Smooth Zoom และ Pan Effects' },
          { type: 'code', text: `Export Settings แนะนำ:
YouTube: 1080p/4K, 30/60fps, H.264
TikTok: 9:16, 1080x1920, 30fps
Instagram Reels: 9:16, 1080x1920, 30fps` },
          { type: 'warning', text: 'ระวังเรื่องลิขสิทธิ์เพลง ใช้ Free Music จาก YouTube Audio Library' },
          { type: 'tools', text: '🔗 Download CapCut ได้ฟรีที่ https://www.capcut.com/' }
        ]
      }
    },
    {
      id: 'lipsync',
      title: 'AI Lip Sync & Animation',
      icon: <Layers className="w-5 h-5" />,
      description: 'สร้าง Lip Sync ด้วย Kling AI',
      content: {
        overview: 'Kling AI เป็นเครื่องมือสำรองที่ช่วยสร้าง Lip Sync และ Animation จากภาพนิ่ง ทำให้ตัวละครพูดได้เหมือนจริง',
        topics: [
          'การเตรียมภาพสำหรับ Lip Sync',
          'การอัดเสียงที่เหมาะสม',
          'Settings และ Parameters ใน Kling AI',
          'การนำไปใช้ร่วมกับ Video อื่นๆ'
        ],
        examples: [
          { type: 'code', text: `เตรียมภาพสำหรับ Lip Sync:
- ความละเอียดอย่างน้อย 512x512
- ใบหน้าชัดเจน ไม่บังปาก
- แสงสม่ำเสมอ ไม่มีเงาตัดหน้า
- Background แยกจาก Subject ชัดเจน` },
          { type: 'tip', text: 'อัดเสียงให้ชัดเจน ไม่มี Background Noise จะได้ผล Lip Sync ที่ดีกว่า' },
          { type: 'tools', text: '🔗 ใช้ HeyGen ที่ https://app.heygen.com/ หรือ AI Studio ที่ https://aistudio.google.com/' }
        ]
      }
    },
    {
      id: 'music',
      title: 'AI Music Creation',
      icon: <Music className="w-5 h-5" />,
      description: 'สร้างเพลงด้วย Suno AI',
      content: {
        overview: 'Suno AI สามารถสร้างเพลงที่มีทั้งดนตรีและเนื้อร้องได้อย่างน่าทึ่ง เหมาะสำหรับ Content Creator ที่ต้องการเพลงประกอบที่ไม่มีปัญหาลิขสิทธิ์',
        topics: [
          'การเขียน Prompt สำหรับเพลง',
          'Genres และ Styles ต่างๆ',
          'การปรับแต่ง Lyrics',
          'การ Export และนำไปใช้งาน'
        ],
        examples: [
          { type: 'code', text: `Suno Prompt Example:
[Verse]
สร้างเพลงโปรโมทสินค้า
ให้ติดหูและจำง่าย
[Chorus] 
ซื้อเลย ซื้อเลย ราคาพิเศษวันนี้
Style: Upbeat Thai Pop, Female Vocal` },
          { type: 'tip', text: 'ระบุ BPM และ Key ถ้าต้องการความแม่นยำในการผลิต' },
          { type: 'tools', text: '🔗 สร้างเพลงได้ที่ https://suno.com/' }
        ]
      }
    },
    {
      id: 'bonus',
      title: 'Bonus: Templates & Cheat Sheets',
      icon: <Gift className="w-5 h-5" />,
      description: 'เอกสารพิเศษ และ Templates พร้อมใช้',
      content: {
        overview: 'รวม Templates, Cheat Sheets, และเครื่องมือพิเศษที่จะช่วยให้คุณทำงานได้เร็วขึ้น 10 เท่า! พร้อม Download และนำไปใช้ได้ทันที',
        topics: [
          'Veo 3 Professional Template Card',
          'Midjourney Cheat Sheet',
          'ChatGPT Power Prompts',
          'Quick Reference Cards',
          'Workflow Templates'
        ],
        examples: [
          { type: 'code', text: `🎯 VEO 3 QUICK REFERENCE CARD
═══════════════════════════════════════
📍 SCENE = Location + Lighting + Mood
👤 CHARACTER = Age + Race + Face + Hair + Outfit  
🎬 CAMERA = Wide → Medium → Close → Movement
💬 DIALOGUE = saying in Thai: "text"
🔊 AUDIO = Ambient + SFX + Voice
✨ VFX = Glitch, Overlay, Transition
🎭 TONE = Genre + Emotion Arc
═══════════════════════════════════════

✅ COPY THIS TEMPLATE:

[SCENE] Interior - [location]. [lighting] lighting, [mood].

[CHARACTER] A [age] Thai [gender], [face type], [hair], 
wearing [outfit details]. 

[SHOT 1] Wide establishing shot. [action].
[SHOT 2] Medium shot, camera [movement]. [action].
[SHOT 3] Close-up on [subject]. [action].

[DIALOGUE] saying in Thai: "[text1]" "[text2]"

[AUDIO] Ambient: [sounds]. SFX: [effects].

[TONE] [genre] with [emotional journey].` },
          { type: 'code', text: `🎨 MIDJOURNEY POWER TEMPLATE
═══════════════════════════════════════
[SUBJECT] + [ACTION] + [STYLE] + [LIGHTING] + [CAMERA] + [PARAMS]

📸 PRODUCT SHOT:
[product] on [surface], [lighting type], [camera angle],
commercial photography, high-end advertising aesthetic
--ar 16:9 --v 6 --style raw

👤 PORTRAIT:
[person description], [pose], [expression], [location],
[lighting style], shot on [camera], [lens]mm
--ar 2:3 --v 6 --q 2

🏙️ SCENE/ENVIRONMENT:
[location], [time of day], [weather], [mood],
[architectural style], [color palette]
--ar 21:9 --v 6 --no people

💡 STYLE KEYWORDS:
• Photorealistic: "8K, ultra detailed, photorealistic"
• Cinematic: "cinematic lighting, movie still, film grain"
• Commercial: "product photography, advertising campaign"
• Fashion: "editorial, vogue style, high fashion"` },
          { type: 'code', text: `🤖 CHATGPT 4O MASTER PROMPTS
═══════════════════════════════════════
🖼️ IMAGE ANALYSIS & REMIX:
"Analyze this product image and suggest:
1. Better angles (provide 3 options)
2. Lighting improvements
3. Background recommendations
4. How to composite with [target background]
Keep original product unchanged but enhance presentation"

📝 CONTENT CREATION:
Role: You are a viral content strategist
Task: Create [content type] for [platform]
Context: [brand/product info]
Requirements:
- Hook in first 3 seconds
- [X] words/duration
- Include CTA
- Match brand voice: [description]
Output: Script with timestamps

🎯 PRODUCT DESCRIPTION:
"Write product description for [product]:
- Target: [audience]
- Tone: [casual/professional/luxury]
- Include: 5 bullet points + 100-word paragraph
- Keywords: [list]
- Emphasize: [USP]"` },
          { type: 'code', text: `⚡ WORKFLOW TEMPLATE: E-COMMERCE PHOTOSHOOT
═══════════════════════════════════════
⏱️ TOTAL TIME: 2-3 HOURS

1️⃣ MIDJOURNEY (30 min)
□ Generate 3 background scenes
□ Create lifestyle model shots  
□ Design complementary props
Prompt: "luxury product photography setup..."

2️⃣ CHATGPT 4O (20 min)
□ Upload product photos
□ Remove backgrounds
□ Composite with MJ scenes
□ Color correction advice

3️⃣ PRODUCT COPY (15 min)
□ Generate descriptions
□ Create bullet points
□ Write social captions

4️⃣ VEO 3 VIDEO (45 min)
□ Script 3 scenes (8 sec each)
□ Generate video clips
□ Select best takes

5️⃣ CAPCUT EDIT (30 min)
□ Import all assets
□ Add transitions
□ Insert product cards
□ Add music/SFX

6️⃣ FINAL DELIVERY
□ Hero image (1:1, 4:5, 16:9)
□ Video (Reels, TikTok, YouTube)
□ Copy document
□ Social media kit` },
          { type: 'tip', text: '💾 Pro Tip: Save ทุก Template เป็น Bookmark หรือ Note app เพื่อใช้ซ้ำได้ทันที ประหยัดเวลา 80%!' },
          { type: 'tools', text: '📥 Download Templates ทั้งหมดในรูปแบบ PDF ได้ที่ปุ่ม "เริ่มฝึกปฏิบัติ"' }
        ]
      }
    },
    {
      id: 'advanced',
      title: 'AI Workflow Integration',
      icon: <Zap className="w-5 h-5" />,
      description: 'รวมทุก Tools เป็น Workflow เดียว',
      content: {
        overview: 'นำทุกเครื่องมือที่เรียนมารวมกันเป็น Workflow ที่มีประสิทธิภาพ สร้างคอนเทนต์คุณภาพสูงแบบครบวงจร',
        topics: [
          'Workflow: จากไอเดียสู่ Final Product',
          'การใช้ AI Tools ร่วมกันอย่างมีประสิทธิภาพ',
          'Time-Saving Techniques และ Shortcuts',
          'Case Studies: โปรเจคตัวอย่างจริง'
        ],
        examples: [
          { type: 'code', text: `📋 E-Commerce Product Launch Workflow:

1. Midjourney: สร้างฉากพื้นหลัง luxury
2. ChatGPT 4o: รีมิกซ์รูปสินค้าใส่ฉาก
3. Veo 3: สร้างวิดีโอ showcase สินค้า
4. Kling AI: เพิ่ม testimonial พูด
5. CapCut: ตัดต่อรวมทุกอย่าง + Sound

⏱️ Total Time: 2-3 ชั่วโมง (แทนที่จะเป็น 2-3 วัน)` },
          { type: 'tip', text: 'สร้าง Template Library และ Prompt Bank ไว้ใช้ซ้ำ ประหยัดเวลา 70%' },
          { type: 'warning', text: 'อย่าพึ่งพา AI 100% - ตรวจสอบและปรับแต่งด้วยตัวเองเสมอ' }
        ]
      }
    }
  ];

  const filteredLessons = lessons.filter(lesson => 
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lesson.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentLesson = lessons.find(l => l.id === activeSection) || lessons[0];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-lg ${darkMode ? 'bg-gray-900/90 border-gray-800' : 'bg-white/90 border-gray-200'} border-b`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Bot className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Master Class
              </h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="ค้นหาบทเรียน..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`pl-10 pr-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden fixed inset-0 z-40 ${darkMode ? 'bg-gray-900' : 'bg-white'} pt-20`}>
          <div className="px-4 py-4">
            <input
              type="text"
              placeholder="ค้นหาบทเรียน..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <div className="mt-4 space-y-2">
              {filteredLessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => {
                    setActiveSection(lesson.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 ${
                    activeSection === lesson.id
                      ? 'bg-blue-500 text-white'
                      : darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                  } ${lesson.id === 'bonus' ? 'border-2 border-purple-500/30' : ''}`}
                >
                  {lesson.icon}
                  <span className="flex-1 flex items-center gap-2">
                    {lesson.title}
                    {lesson.id === 'bonus' && (
                      <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                        NEW
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block">
            <div className={`sticky top-24 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow-lg`}>
              <h2 className="font-semibold text-lg mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                บทเรียนทั้งหมด
              </h2>
              <nav className="space-y-2">
                {filteredLessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveSection(lesson.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between group transition-all ${
                      activeSection === lesson.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                        : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    } ${lesson.id === 'bonus' ? 'border-2 border-purple-500/30' : ''}`}
                  >
                    <div className="flex items-center space-x-3">
                      {lesson.icon}
                      <div>
                        <p className="font-medium flex items-center gap-2">
                          {lesson.title}
                          {lesson.id === 'bonus' && (
                            <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                              NEW
                            </span>
                          )}
                        </p>
                        <p className={`text-xs ${activeSection === lesson.id ? 'text-white/80' : 'text-gray-500'}`}>
                          {lesson.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === lesson.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-3">
            <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 shadow-lg`}>
              {/* Lesson Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                    {currentLesson.icon}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">{currentLesson.title}</h1>
                    <p className="text-gray-500">{currentLesson.description}</p>
                  </div>
                </div>
              </div>

              {/* Lesson Content */}
              <div className="space-y-8">
                {/* Overview */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <Target className="w-6 h-6 mr-2 text-blue-500" />
                    ภาพรวมบทเรียน
                  </h2>
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {currentLesson.content.overview}
                  </p>
                </section>

                {/* Topics */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">หัวข้อที่จะเรียน</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentLesson.content.topics.map((topic, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border-l-4 border-blue-500`}
                      >
                        <div className="flex items-start">
                          <span className="text-blue-500 font-bold mr-3">{index + 1}.</span>
                          <p>{topic}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Examples */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">ตัวอย่างและเทคนิค</h2>
                  <div className="space-y-4">
                    {currentLesson.content.examples.map((example, index) => (
                      <div 
                        key={index}
                        className={`p-6 rounded-lg ${
                          example.type === 'code' 
                            ? darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-gray-900 text-white'
                            : example.type === 'tip'
                            ? 'bg-green-500/10 border border-green-500/30'
                            : example.type === 'warning'
                            ? 'bg-yellow-500/10 border border-yellow-500/30'
                            : example.type === 'tools'
                            ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30'
                            : darkMode ? 'bg-gray-700' : 'bg-gray-100'
                        }`}
                      >
                        {example.type === 'code' ? (
                          <div className="relative group">
                            <button
                              onClick={() => copyToClipboard(example.text, index)}
                              className={`absolute top-2 right-2 p-2 rounded-md transition-all ${
                                copiedTemplate === index
                                  ? 'bg-green-500 text-white'
                                  : darkMode 
                                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                              }`}
                              title="Copy template"
                            >
                              {copiedTemplate === index ? (
                                <CheckCircle className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                            <pre className="font-mono text-sm overflow-x-auto pr-12">
                              <code>{example.text}</code>
                            </pre>
                          </div>
                        ) : example.type === 'tools' ? (
                          <div className="flex items-center justify-between">
                            <div className="flex items-start space-x-3">
                              <span className="text-2xl">🔧</span>
                              <p className="flex-1">{example.text}</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-blue-500" />
                          </div>
                        ) : (
                          <div className="flex items-start space-x-3">
                            <span className={`text-2xl ${example.type === 'tip' ? '💡' : '⚠️'}`} />
                            <p className="flex-1">{example.text}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Practice Section */}
                <section className={`p-6 rounded-lg ${darkMode ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50' : 'bg-gradient-to-r from-blue-50 to-purple-50'} border ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    ลองฝึกปฏิบัติ
                  </h3>
                  <p className="mb-4">
                    {activeSection === 'bonus' 
                      ? 'Copy Templates พร้อมใช้ หรือสร้าง Template ของคุณเอง!'
                      : 'พร้อมที่จะลองใช้ความรู้จากบทเรียนนี้แล้วหรือยัง?'
                    }
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center space-x-2"
                      onClick={() => setShowPracticeModal(true)}>
                      <span>เริ่มฝึกปฏิบัติ</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    {activeSection === 'bonus' && (
                      <button 
                        className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center space-x-2"
                        onClick={() => setShowTemplateGenerator(true)}>
                        <span>🚀 Template Generator</span>
                      </button>
                    )}
                  </div>
                </section>

                {/* Navigation */}
                <div className="flex justify-between pt-8">
                  <button
                    onClick={() => {
                      const currentIndex = lessons.findIndex(l => l.id === activeSection);
                      if (currentIndex > 0) {
                        setActiveSection(lessons[currentIndex - 1].id);
                      }
                    }}
                    className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                    disabled={lessons.findIndex(l => l.id === activeSection) === 0}
                  >
                    ← บทเรียนก่อนหน้า
                  </button>
                  <button
                    onClick={() => {
                      const currentIndex = lessons.findIndex(l => l.id === activeSection);
                      if (currentIndex < lessons.length - 1) {
                        setActiveSection(lessons[currentIndex + 1].id);
                      }
                    }}
                    className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                    disabled={lessons.findIndex(l => l.id === activeSection) === lessons.length - 1}
                  >
                    บทเรียนถัดไป →
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Practice Modal */}
      {showPracticeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowPracticeModal(false);
          }}>
          <div className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 shadow-2xl`}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold">🚀 AI Tools สำหรับฝึกปฏิบัติ</h2>
              <button 
                onClick={() => setShowPracticeModal(false)}
                className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              เลือก Tools ที่ต้องการใช้ตามบทเรียน คลิกเพื่อเปิดในแท็บใหม่
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(aiTools).map(([key, tool]) => (
                <a
                  key={key}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg border ${
                    darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'
                  } transition-all hover:shadow-md group`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                        {tool.name}
                      </h3>
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {tool.desc}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>

            <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} border ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
              <p className="text-sm">
                💡 <strong>Pro Tip:</strong> เปิด Tools หลายตัวพร้อมกันเพื่อทำงานแบบ Workflow ที่มีประสิทธิภาพ
              </p>
            </div>

            <div className={`mt-4 p-4 rounded-lg ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'} border ${darkMode ? 'border-purple-800' : 'border-purple-200'}`}>
              <h3 className="font-semibold mb-2 flex items-center">
                <Gift className="w-5 h-5 mr-2" />
                Bonus Materials
              </h3>
              <p className="text-sm mb-3">
                📥 Download Templates & Cheat Sheets ทั้งหมดเพื่อใช้งานออฟไลน์
              </p>
              <button 
                onClick={() => {
                  alert('🎉 ฟีเจอร์ Download จะเพิ่มเร็วๆ นี้! ตอนนี้สามารถ Copy Templates จากบทเรียน Bonus ได้ครับ');
                }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-shadow">
                Download All Templates (PDF)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Template Generator Modal */}
      {showTemplateGenerator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowTemplateGenerator(false);
          }}>
          <div className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 shadow-2xl`}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold">🚀 Veo 3 Template Generator</h2>
              <button 
                onClick={() => setShowTemplateGenerator(false)}
                className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} mb-6`}>
              <h3 className="font-semibold mb-4">Quick Template Builder</h3>
              <p className="text-sm mb-4">Coming soon! ตอนนี้ใช้ templates จากบทเรียน Bonus ได้ครับ</p>
              
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} text-sm`}>
                <p className="font-mono">
                  // TODO: Interactive form to generate<br/>
                  // - Scene location & lighting<br/>
                  // - Character details<br/>
                  // - Camera movements<br/>
                  // - Dialogue in Thai<br/>
                  // - Auto-generate complete prompt
                </p>
              </div>
            </div>

            <button 
              onClick={() => {
                setShowTemplateGenerator(false);
                setActiveSection('bonus');
              }}
              className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-shadow">
              ดู Templates ทั้งหมดในบทเรียน Bonus
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`mt-16 py-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">
            © 2024 AI Master Class | Created with 💜 for Students
          </p>
        </div>
      </footer>

      {/* Copy Success Toast */}
      {copiedTemplate !== null && (
        <div className="fixed bottom-4 right-4 z-50 animate-pulse">
          <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>Template copied!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIContentCourse;