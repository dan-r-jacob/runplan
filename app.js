const SUPABASE_URL = "https://axbvjlvpwqestechexdx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_kp6GyNZmGF_m4pWgu5LzCA_nKcUcxPz";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

const defaultPlan = {
  id: "manchester-2027",
  name: "Manchester Marathon",
  raceDate: "2027-04-18",
  targetTime: "03:59:59",
  notes: "Sub-4 target",
  startDate: "2026-11-30",
  weeks: [
    {week:1, label:"Foundation", start:"2026-11-30", end:"2026-12-06", sessions:[
      {type:"Easy", durationMin:40, instructions:"Easy throughout."},
      {type:"Threshold", durationMin:45, instructions:"10 min easy · 3 × 6 min threshold, 2 min easy jog · easy to finish"},
      {type:"Long", distanceKm:18, instructions:"Easy throughout."}
    ]},
    {week:2, label:"Foundation", start:"2026-12-07", end:"2026-12-13", sessions:[
      {type:"Easy", durationMin:45, instructions:"Easy throughout."},
      {type:"Progression", durationMin:45, instructions:"15 min easy · 15 min steady · 10 min MP · 5 min easy"},
      {type:"Long", distanceKm:19, instructions:"Easy throughout."}
    ]},
    {week:3, label:"Foundation", start:"2026-12-14", end:"2026-12-20", sessions:[
      {type:"Easy", durationMin:45, instructions:"Easy throughout."},
      {type:"Threshold", durationMin:50, instructions:"10 min easy · 3 × 8 min threshold, 2 min easy · 10 min easy"},
      {type:"Long", distanceKm:20, instructions:"Easy throughout."}
    ]},
    {week:4, label:"Cutback", start:"2026-12-21", end:"2026-12-27", sessions:[
      {type:"Easy", durationMin:38, instructions:"Easy throughout."},
      {type:"Fartlek", durationMin:40, instructions:"10 min easy · 6 × 2 min threshold / 2 min easy · easy to finish"},
      {type:"Long", distanceKm:16, instructions:"Easy throughout."}
    ]},
    {week:5, label:"Aerobic development", start:"2026-12-28", end:"2027-01-03", sessions:[
      {type:"Easy", durationMin:45, instructions:"Easy throughout."},
      {type:"Threshold", durationMin:50, instructions:"10 min easy · 2 × 12 min threshold, 3 min easy · easy to finish"},
      {type:"Long", distanceKm:21, instructions:"Easy. Begin consistent long-run fuelling practice."}
    ]},
    {week:6, label:"Aerobic development", start:"2027-01-04", end:"2027-01-10", sessions:[
      {type:"Easy", durationMin:45, instructions:"Easy throughout."},
      {type:"Marathon pace", durationMin:50, instructions:"10 min easy · 30 min MP · 10 min easy"},
      {type:"Long", distanceKm:22, instructions:"Easy throughout."}
    ]},
    {week:7, label:"Aerobic development", start:"2027-01-11", end:"2027-01-17", sessions:[
      {type:"Easy", durationMin:45, instructions:"Easy throughout."},
      {type:"Threshold", durationMin:55, instructions:"10 min easy · 3 × 10 min threshold, 2 min easy · easy to finish"},
      {type:"Long", distanceKm:24, instructions:"Easy throughout."}
    ]},
    {week:8, label:"Cutback", start:"2027-01-18", end:"2027-01-24", sessions:[
      {type:"Easy", durationMin:40, instructions:"Easy throughout."},
      {type:"Progression", durationMin:45, instructions:"20 min easy · 15 min steady · 5 min MP · 5 min easy"},
      {type:"Long", distanceKm:18, instructions:"Easy throughout."}
    ]},
    {week:9, label:"4-run transition", start:"2027-01-25", end:"2027-01-31", sessions:[
      {type:"Recovery", durationMin:28, instructions:"Very relaxed."},
      {type:"Easy", durationMin:40, instructions:"Easy throughout."},
      {type:"Threshold", durationMin:50, instructions:"10 min easy · 4 × 6 min threshold, 2 min easy · easy to finish"},
      {type:"Long", distanceKm:24, instructions:"Easy throughout."}
    ]},
    {week:10, label:"4-run development", start:"2027-02-01", end:"2027-02-07", sessions:[
      {type:"Recovery", durationMin:30, instructions:"Very relaxed."},
      {type:"Easy", durationMin:45, instructions:"Easy throughout."},
      {type:"Marathon pace", durationMin:55, instructions:"10 min easy · 35 min MP · 10 min easy"},
      {type:"Long", distanceKm:25, instructions:"Easy throughout."}
    ]},
    {week:11, label:"4-run development", start:"2027-02-08", end:"2027-02-14", sessions:[
      {type:"Recovery", durationMin:30, instructions:"Very relaxed."},
      {type:"Easy", durationMin:45, instructions:"Easy throughout."},
      {type:"Threshold", durationMin:55, instructions:"10 min easy · 2 × 15 min threshold, 3 min easy · easy to finish"},
      {type:"Long", distanceKm:27, instructions:"Easy throughout."}
    ]},
    {week:12, label:"Cutback", start:"2027-02-15", end:"2027-02-21", sessions:[
      {type:"Recovery", durationMin:25, instructions:"Very relaxed."},
      {type:"Easy", durationMin:40, instructions:"Easy throughout."},
      {type:"Marathon pace", durationMin:45, instructions:"10 min easy · 20 min MP · 15 min easy"},
      {type:"Long", distanceKm:21, instructions:"Easy throughout."}
    ]},
    {week:13, label:"Marathon specific", start:"2027-02-22", end:"2027-02-28", sessions:[
      {type:"Recovery", durationMin:30, instructions:"Very relaxed."},
      {type:"Easy", durationMin:45, instructions:"Easy throughout."},
      {type:"Threshold", durationMin:55, instructions:"10 min easy · 3 × 10 min threshold, 2 min easy · easy to finish"},
      {type:"Long", distanceKm:28, instructions:"Easy throughout."}
    ]},
    {week:14, label:"Marathon specific", start:"2027-03-01", end:"2027-03-07", sessions:[
      {type:"Recovery", durationMin:30, instructions:"Very relaxed."},
      {type:"Easy", durationMin:45, instructions:"Easy throughout."},
      {type:"Marathon pace", durationMin:55, instructions:"10 min easy · 40 min MP · 5 min easy"},
      {type:"Long", distanceKm:30, instructions:"Easy throughout. No fast finish."}
    ]},
    {week:15, label:"Marathon specific", start:"2027-03-08", end:"2027-03-14", sessions:[
      {type:"Recovery", durationMin:30, instructions:"Very relaxed."},
      {type:"Easy", durationMin:45, instructions:"Easy throughout."},
      {type:"Threshold", durationMin:50, instructions:"10 min easy · 3 × 8 min threshold, 2 min easy · easy to finish"},
      {type:"Long + MP", distanceKm:26, instructions:"8 km easy · 10 km MP · 8 km easy"}
    ]},
    {week:16, label:"Peak distance", start:"2027-03-15", end:"2027-03-21", sessions:[
      {type:"Recovery", durationMin:30, instructions:"Very relaxed."},
      {type:"Easy", durationMin:48, instructions:"Easy throughout."},
      {type:"Marathon pace", durationMin:50, instructions:"10 min easy · 30 min MP · 10 min easy"},
      {type:"Long", distanceKm:32, instructions:"Easy throughout. Use intended race fuelling strategy."}
    ]},
    {week:17, label:"Final specific week", start:"2027-03-22", end:"2027-03-28", sessions:[
      {type:"Recovery", durationMin:30, instructions:"Very relaxed."},
      {type:"Easy", durationMin:45, instructions:"Easy throughout."},
      {type:"Threshold", durationMin:45, instructions:"10 min easy · 3 × 6 min threshold, 2 min easy · easy to finish"},
      {type:"Long + MP", distanceKm:28, instructions:"6 km easy · 7 km MP · 2 km easy · 7 km MP · easy to 28 km"}
    ]},
    {week:18, label:"Taper 1", start:"2027-03-29", end:"2027-04-04", sessions:[
      {type:"Recovery", durationMin:28, instructions:"Very relaxed."},
      {type:"Easy", durationMin:40, instructions:"Easy throughout."},
      {type:"Marathon pace", durationMin:45, instructions:"10 min easy · 25 min MP · 10 min easy"},
      {type:"Long", distanceKm:24, instructions:"Easy throughout."}
    ]},
    {week:19, label:"Taper 2", start:"2027-04-05", end:"2027-04-11", sessions:[
      {type:"Recovery", durationMin:25, instructions:"Very relaxed."},
      {type:"Easy", durationMin:35, instructions:"Easy throughout."},
      {type:"Marathon sharpener", durationMin:40, instructions:"10 min easy · 3 × 6 min MP, 2 min easy · easy to finish"},
      {type:"Long", distanceKm:16, instructions:"Easy throughout."}
    ]},
    {week:20, label:"Race week", start:"2027-04-12", end:"2027-04-18", sessions:[
      {type:"Easy", durationMin:28, instructions:"Very relaxed."},
      {type:"Marathon reminder", durationMin:30, instructions:"10 min easy · 2 × 5 min MP, 3 min easy · easy to finish"},
      {type:"Shakeout", durationMin:18, instructions:"Very easy. Optional if you prefer to rest."},
      {type:"Race", distanceKm:42.195, date:"2027-04-18", instructions:"Race day."}
    ]}
  ]
};

const schemaPrompt = `Convert my running training plan into JSON that can be imported into RunPlan.

Return ONLY valid JSON. Do not wrap it in markdown.

Use this exact structure:
{
  "name": "Race or plan name",
  "raceDate": "YYYY-MM-DD",
  "targetTime": "HH:MM:SS",
  "notes": "optional",
  "startDate": "YYYY-MM-DD",
  "weeks": [
    {
      "week": 1,
      "label": "optional phase/focus",
      "start": "YYYY-MM-DD",
      "end": "YYYY-MM-DD",
      "sessions": [
        {
          "type": "Easy",
          "distanceKm": 8,
          "durationMin": 45,
          "date": "YYYY-MM-DD",
          "day": "Wednesday",
          "instructions": "Full workout instructions"
        }
      ]
    }
  ]
}

Rules:
- Include every week and every session.
- Each session must have "type" and "instructions".
- Include distanceKm only when the plan specifies a distance.
- Include durationMin only when the plan specifies a duration.
- "date" and "day" are optional. Include them only if the original plan assigns a specific date/day.
- Do not invent dates or days when the source plan is flexible.
- Use kilometres.
- Preserve repetitions, pace instructions, recovery periods and notes in "instructions".
- targetTime must be HH:MM:SS.
- raceDate/start/end/date values must be YYYY-MM-DD.
- If a field is unknown and optional, omit it rather than guessing.`;

const state = {
  user: null,
  plans: [],
  currentPlanId: null,
  logs: [],
  shoes: [],
  backgroundStyle: "horizon",
  loading: false,
  editingPlan: false,
  profile: null,
  coachClients: [],
  coachInvites: [],
  coachTemplates: [],
  coachClientPlans: [],
  coachClientLogs: [],
  selectedCoachClientId: null,
  coachEditingPlan: null
};

const els = Object.fromEntries([...document.querySelectorAll("[id]")].map(x=>[x.id,x]));

function showAuthMessage(message, type=""){
  els.authMessage.textContent=message||"";
  els.authMessage.className=`auth-message ${type}`;
}
function setAuthenticatedUi(isAuthed){
  els.authGate.classList.toggle("hidden", isAuthed);
  document.getElementById("app").classList.toggle("app-hidden", !isAuthed);
}
function pad(n){ return String(n).padStart(2,"0"); }
function targetSeconds(t){
  const [h,m,s]=String(t||"03:59:59").split(":").map(Number);
  return h*3600+m*60+(s||0);
}
function paceString(secPerKm){
  const m=Math.floor(secPerKm/60), s=Math.round(secPerKm%60);
  return `${m}:${pad(s)}/km`;
}
function derivePaces(plan){
  const mp=targetSeconds(plan.targetTime)/42.195;
  const fmt=(x)=>paceString(x);
  return {
    marathon:`${fmt(mp-3)}–${fmt(mp+4)}`,
    easy:`${fmt(mp+14)}–${fmt(mp+49)}`,
    recovery:`${fmt(mp+39)}–${fmt(mp+69)}`,
    steady:`${fmt(mp-6)}–${fmt(mp+14)}`,
    threshold:`${fmt(mp-31)}–${fmt(mp-16)}`,
    interval:`${fmt(mp-46)}–${fmt(mp-31)}`
  };
}
function parseDate(s){ return new Date(`${s}T12:00:00`); }
function todayIso(){ return new Date().toISOString().slice(0,10); }
function formatDateRange(w){
  if(!w?.start || !w?.end) return "";
  const o={day:"numeric",month:"short"};
  return `${parseDate(w.start).toLocaleDateString("en-GB",o)}–${parseDate(w.end).toLocaleDateString("en-GB",{...o,year:"numeric"})}`;
}
function mapPlanRow(row){
  const data=row.plan_data||{};
  return {
    id:row.id,
    name:row.name,
    raceDate:row.race_date,
    targetTime:row.target_time,
    startDate:row.start_date,
    notes:row.notes||"",
    weeks:Array.isArray(data.weeks)?data.weeks:[],
    draftWeeks:Array.isArray(row.draft_plan_data?.weeks)?row.draft_plan_data.weeks:[],
    archived:!!row.archived,
    coachId:row.coach_id||null,
    isTemplate:!!row.is_template,
    publicationStatus:row.publication_status||"published"
  };
}
function planToRow(plan){
  return {
    name:plan.name,
    race_date:plan.raceDate,
    target_time:plan.targetTime,
    start_date:plan.startDate||plan.weeks?.[0]?.start||plan.raceDate,
    notes:plan.notes||"",
    plan_data:{weeks:plan.weeks||[]},
    archived:false
  };
}
function currentPlan(){ return state.plans.find(p=>p.id===state.currentPlanId) || state.plans[0] || null; }
function getCurrentWeek(plan){
  if(!plan?.weeks?.length) return null;
  const now=new Date();
  const found=plan.weeks.find(w=>now>=parseDate(w.start)&&now<=parseDate(w.end));
  if(found) return found;
  if(now<parseDate(plan.weeks[0].start)) return plan.weeks[0];
  return plan.weeks[plan.weeks.length-1];
}
function sessionKey(plan,week,idx){ return `${plan.id}|${week.week}|${idx}`; }
function logFor(plan,week,idx){ return state.logs.find(l=>l.sessionKey===sessionKey(plan,week,idx)); }
function sessionClass(type){
  const t=(type||"").toLowerCase();
  if(t.includes("long")) return "long";
  if(t.includes("threshold")||t.includes("interval")||t.includes("fartlek")||t.includes("progression")) return "threshold";
  if(t.includes("marathon")) return "marathon";
  if(t.includes("recovery")) return "recovery";
  return "easy";
}
function iconFor(type){
  const c=sessionClass(type);
  return c==="long"?"↝":c==="threshold"?"▥":c==="marathon"?"◌":c==="recovery"?"↺":"↗";
}
function completedForWeek(plan,week){ return week.sessions.filter((_,i)=>!!logFor(plan,week,i)).length; }
function loggedDistanceForWeek(plan,week){ return week.sessions.reduce((sum,_,i)=>sum+(logFor(plan,week,i)?.distanceKm||0),0); }
function plannedDistanceForWeek(week){ return week.sessions.reduce((sum,s)=>sum+(Number(s.distanceKm)||0),0); }
function durationToSeconds(v){
  if(!v) return 0;
  const parts=String(v).trim().split(":").map(Number);
  if(parts.some(Number.isNaN)) return 0;
  if(parts.length===2) return parts[0]*60+parts[1];
  if(parts.length===3) return parts[0]*3600+parts[1]*60+parts[2];
  return Number(v)*60;
}
function calcPace(distance,durationText){
  const sec=durationToSeconds(durationText);
  if(!distance||!sec) return "—";
  return paceString(sec/Number(distance));
}
function backgroundLabel(id){ return backgroundOptions.find(x=>x[0]===id)?.[1] || "Horizon"; }
const backgroundOptions = [
  ["flow","Flow","Layered waves"],
  ["horizon","Horizon","Open landscape"],
  ["mountains","Mountains","Bold and calm"],
  ["coastal","Coastal","Fresh and expansive"],
  ["city","City","Urban and modern"],
  ["track","Track","Athletic track"],
  ["road","Road","Journey and motion"],
  ["minimal","Minimal","Soft and abstract"],
  ["contour","Contour","Topographic detail"],
  ["split","Split","Bold geometric"]
];
function applyBackground(){
  const header=document.querySelector(".app-header");
  if(!header) return;
  [...header.classList].filter(c=>c.startsWith("theme-")).forEach(c=>header.classList.remove(c));
  header.classList.add(`theme-${state.backgroundStyle}`);
  if(els.backgroundStyleValue) els.backgroundStyleValue.textContent=backgroundLabel(state.backgroundStyle);
}


async function ensureProfile(){
  const {data,error}=await supabaseClient.from("profiles").select("*").eq("user_id",state.user.id).maybeSingle();
  if(error) throw error;
  if(data) return data;
  const requested=(state.user.user_metadata?.account_role==="coach")?"coach":"athlete";
  const payload={user_id:state.user.id,email:state.user.email,role:requested};
  const {data:created,error:createError}=await supabaseClient.from("profiles").insert(payload).select().single();
  if(createError) throw createError;
  return created;
}
function isCoach(){ return state.profile?.role==="coach"; }
function currentEditorPlan(){ return state.coachEditingPlan || currentPlan(); }

async function loadCoachData(){
  state.coachClients=[]; state.coachTemplates=[]; state.coachInvites=[]; state.coachClientPlans=[]; state.coachClientLogs=[];
  if(isCoach()){
    const [rels,templates,invites]=await Promise.all([
      supabaseClient.from("coach_clients").select("coach_id,athlete_id,status,created_at,profiles!coach_clients_athlete_id_fkey(user_id,email,role)").eq("coach_id",state.user.id).eq("status","accepted"),
      supabaseClient.from("plans").select("*").eq("user_id",state.user.id).eq("is_template",true).order("created_at"),
      supabaseClient.from("coach_invites").select("*").eq("coach_id",state.user.id).eq("status","pending").order("created_at",{ascending:false})
    ]);
    if(rels.error) throw rels.error;
    if(templates.error) throw templates.error;
    if(invites.error) throw invites.error;
    state.coachClients=(rels.data||[]).map(r=>({id:r.athlete_id,email:r.profiles?.email||"Athlete",status:r.status}));
    state.coachTemplates=(templates.data||[]).map(mapPlanRow);
    state.coachInvites=invites.data||[];
  } else {
    const {data,error}=await supabaseClient.from("coach_invites").select("*,profiles!coach_invites_coach_id_fkey(email)").eq("status","pending").order("created_at",{ascending:false});
    if(error) throw error;
    state.coachInvites=data||[];
  }
}
function updateRoleUi(){
  const coach=isCoach();
  document.body.classList.toggle("coach-mode",coach);
  if(els.clientsNavBtn) els.clientsNavBtn.hidden=!coach;
  if(els.coachInvitesBtn) els.coachInvitesBtn.hidden=coach || !state.coachInvites.length;
  if(els.coachInviteCount) els.coachInviteCount.textContent=state.coachInvites.length;
  if(els.accountTypeValue) els.accountTypeValue.textContent=coach?"Coach":"Athlete";
}
async function setAccountRole(role){
  const {data,error}=await supabaseClient.from("profiles").update({role}).eq("user_id",state.user.id).select().single();
  if(error) throw error;
  state.profile=data;
  await loadCoachData();
  updateRoleUi();
  renderCoachView();
}

async function ensureSettings(){
  const {data,error}=await supabaseClient.from("user_settings").select("*").eq("user_id",state.user.id).maybeSingle();
  if(error) throw error;
  if(!data){
    const {data:created,error:createError}=await supabaseClient.from("user_settings")
      .insert({user_id:state.user.id,background_style:"horizon"}).select().single();
    if(createError) throw createError;
    return created;
  }
  return data;
}
async function ensureDefaultShoe(){
  const {data,error}=await supabaseClient.from("shoes").select("*").order("created_at");
  if(error) throw error;
  if(data.length) return data;
  const {data:created,error:createError}=await supabaseClient.from("shoes")
    .insert({user_id:state.user.id,name:"Default shoes",active:true}).select();
  if(createError) throw createError;
  return created;
}
async function loadCloudState(){
  state.loading=true;
  try{
    state.profile=await ensureProfile();
    const settings=await ensureSettings();
    const [plansRes,shoesRes,logsRes]=await Promise.all([
      supabaseClient.from("plans").select("*").eq("user_id",state.user.id).eq("is_template",false).eq("archived",false).order("created_at"),
      ensureDefaultShoe().then(data=>({data,error:null})),
      supabaseClient.from("run_logs").select("*").eq("user_id",state.user.id).order("run_date",{ascending:false})
    ]);
    if(plansRes.error) throw plansRes.error;
    if(shoesRes.error) throw shoesRes.error;
    if(logsRes.error) throw logsRes.error;

    state.plans=(plansRes.data||[]).map(mapPlanRow).filter(p=>!p.coachId || p.publicationStatus==="published");
    state.shoes=(shoesRes.data||[]).map(s=>({id:s.id,name:s.name,active:s.active}));
    state.logs=(logsRes.data||[]).map(l=>({
      id:l.id, sessionKey:l.session_key, planId:l.plan_id, week:l.week_number,
      sessionIndex:l.session_index, sessionType:l.session_type, date:l.run_date,
      distanceKm:Number(l.distance_km), durationSec:l.duration_seconds,
      pace: paceString(l.duration_seconds/Number(l.distance_km)),
      avgHr:l.average_hr, rpe:l.rpe, shoeId:l.shoe_id, notes:l.notes||""
    }));
    state.backgroundStyle=settings.background_style||"horizon";
    state.currentPlanId=settings.active_plan_id && state.plans.some(p=>p.id===settings.active_plan_id)
      ? settings.active_plan_id
      : state.plans[0]?.id || null;
    if(state.currentPlanId!==settings.active_plan_id){
      await supabaseClient.from("user_settings").update({active_plan_id:state.currentPlanId}).eq("user_id",state.user.id);
    }
    await loadCoachData();
    updateRoleUi();
    render();
    renderCoachView();
  } finally {
    state.loading=false;
  }
}
async function persistSettings(patch){
  Object.assign(state, patch);
  const payload={};
  if("currentPlanId" in patch) payload.active_plan_id=patch.currentPlanId;
  if("backgroundStyle" in patch) payload.background_style=patch.backgroundStyle;
  const {error}=await supabaseClient.from("user_settings").update(payload).eq("user_id",state.user.id);
  if(error) throw error;
}


function isoDateUTC(d){
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth()+1)}-${pad(d.getUTCDate())}`;
}
function addUtcDays(date,days){
  const d=new Date(Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate()));
  d.setUTCDate(d.getUTCDate()+days);
  return d;
}
function buildWeekSkeleton(raceDate,weekCount){
  const race=new Date(`${raceDate}T12:00:00Z`);
  const weekday=race.getUTCDay();
  const sinceMonday=(weekday+6)%7;
  const finalStart=addUtcDays(race,-sinceMonday);
  const weeks=[];
  for(let i=0;i<weekCount;i++){
    const reverse=(weekCount-1)-i;
    const start=addUtcDays(finalStart,-7*reverse);
    const end=i===weekCount-1 ? race : addUtcDays(start,6);
    weeks.push({week:i+1,label:"",start:isoDateUTC(start),end:isoDateUTC(end),sessions:[]});
  }
  return weeks;
}
async function savePlanStructure(plan){
  const coachDraft=!!state.coachEditingPlan;
  const payload=coachDraft
    ? {draft_plan_data:{weeks:plan.weeks||[]}}
    : {start_date:plan.weeks?.[0]?.start||plan.startDate||plan.raceDate,plan_data:{weeks:plan.weeks||[]}};
  const {error}=await supabaseClient.from("plans").update(payload).eq("id",plan.id);
  if(error) throw error;
}
function sessionSummary(s){
  const parts=[];
  if(s.distanceKm) parts.push(`${s.distanceKm} km`);
  if(s.durationMin) parts.push(`${s.durationMin} min`);
  if(s.day) parts.push(s.day);
  if(s.date) parts.push(s.date);
  return parts.join(" · ") || "No distance/duration set";
}
function renderPlanEditor(plan){
  els.planWeeks.innerHTML=`<div class="plan-editor-banner"><div><strong>Plan editor</strong><span>Add, edit or copy sessions. Changes are saved to your account.</span></div><button id="doneEditingPlan" class="primary-btn compact" type="button">Done</button></div>`+
    plan.weeks.map((w,wi)=>`<section class="editor-week">
      <div class="editor-week-head"><div><strong>Week ${w.week}</strong><span>${formatDateRange(w)}${w.label?` · ${w.label}`:""}</span></div><span>${w.sessions.length} session${w.sessions.length===1?"":"s"}</span></div>
      <div>${w.sessions.length?w.sessions.map((s,si)=>`<div class="editor-session"><div class="editor-session-copy"><strong>${s.type}</strong><span>${sessionSummary(s)} · ${s.instructions||"No instructions"}</span></div><div class="editor-session-actions"><button class="mini-btn edit-session-btn" data-week="${w.week}" data-session="${si}" type="button">Edit</button><button class="mini-btn danger delete-session-btn" data-week="${w.week}" data-session="${si}" type="button">Delete</button></div></div>`).join(""):`<div class="muted" style="font-size:12px;padding:12px 0">No sessions added yet.</div>`}</div>
      <div class="week-editor-actions"><button class="add-session-btn" data-add-week="${w.week}" type="button">+ Add session</button>${wi>0?`<button class="copy-week-btn" data-copy-week="${w.week}" type="button">Copy previous week</button>`:""}</div>
    </section>`).join("");

  document.getElementById("doneEditingPlan")?.addEventListener("click",()=>{state.editingPlan=false;render();});
  document.querySelectorAll(".add-session-btn").forEach(b=>b.addEventListener("click",()=>openSessionEditor(Number(b.dataset.addWeek))));
  document.querySelectorAll(".edit-session-btn").forEach(b=>b.addEventListener("click",()=>openSessionEditor(Number(b.dataset.week),Number(b.dataset.session))));
  document.querySelectorAll(".delete-session-btn").forEach(b=>b.addEventListener("click",()=>confirmDeleteSession(Number(b.dataset.week),Number(b.dataset.session))));
  document.querySelectorAll(".copy-week-btn").forEach(b=>b.addEventListener("click",()=>copyPreviousWeek(Number(b.dataset.copyWeek))));
}
function openSessionEditor(weekNo,sessionIndex=null){
  const plan=currentEditorPlan();
  const week=plan?.weeks.find(w=>Number(w.week)===Number(weekNo));
  if(!plan||!week) return;
  const existing=sessionIndex===null?null:week.sessions[sessionIndex];
  const types=["Easy","Recovery","Long","Marathon pace","Threshold","Interval","Progression","Fartlek","Shakeout","Race"];
  showModal(`<div class="eyebrow">Week ${week.week}</div><h3>${existing?"Edit session":"Add session"}</h3>
    <div class="session-form-grid">
      <label class="full-row">Session type<input id="seType" list="sessionTypes" value="${existing?.type||""}" placeholder="e.g. Easy"><datalist id="sessionTypes">${types.map(t=>`<option value="${t}"></option>`).join("")}</datalist></label>
      <label>Distance (km)<input id="seDistance" type="number" min="0" step="0.1" value="${existing?.distanceKm??""}"><span class="field-hint">Optional</span></label>
      <label>Duration (min)<input id="seDuration" type="number" min="0" step="1" value="${existing?.durationMin??""}"><span class="field-hint">Optional</span></label>
      <label>Day<select id="seDay"><option value="">Flexible</option>${["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(d=>`<option ${existing?.day===d?"selected":""}>${d}</option>`).join("")}</select></label>
      <label>Specific date<input id="seDate" type="date" value="${existing?.date||""}"><span class="field-hint">Optional</span></label>
      <label class="full-row">Instructions<textarea id="seInstructions" rows="4" placeholder="Describe the session">${existing?.instructions||""}</textarea></label>
    </div>
    <div class="modal-actions"><button class="secondary-btn" id="seCancel" type="button">Cancel</button><button class="primary-btn" id="seSave" type="button">Save session</button></div>`);
  document.getElementById("seCancel").onclick=closeModal;
  document.getElementById("seSave").onclick=async()=>{
    const type=document.getElementById("seType").value.trim();
    const instructions=document.getElementById("seInstructions").value.trim();
    if(!type) return alert("Add a session type.");
    if(!instructions) return alert("Add session instructions.");
    const session={type,instructions};
    const distance=Number(document.getElementById("seDistance").value);
    const duration=Number(document.getElementById("seDuration").value);
    const day=document.getElementById("seDay").value;
    const date=document.getElementById("seDate").value;
    if(distance>0) session.distanceKm=distance;
    if(duration>0) session.durationMin=duration;
    if(day) session.day=day;
    if(date) session.date=date;
    if(existing) week.sessions[sessionIndex]=session; else week.sessions.push(session);
    try{await savePlanStructure(plan);closeModal();render();}catch(err){alert(err.message);}
  };
}
function confirmDeleteSession(weekNo,sessionIndex){
  const plan=currentEditorPlan(),week=plan?.weeks.find(w=>Number(w.week)===Number(weekNo));
  if(!plan||!week) return;
  const s=week.sessions[sessionIndex];
  showModal(`<div class="eyebrow">Delete session</div><h3>${s.type}</h3><p>This removes the session from Week ${week.week}. Logged runs are not deleted.</p><div class="modal-actions"><button class="secondary-btn" id="delCancel">Cancel</button><button class="primary-btn" id="delConfirm">Delete</button></div>`);
  document.getElementById("delCancel").onclick=closeModal;
  document.getElementById("delConfirm").onclick=async()=>{week.sessions.splice(sessionIndex,1);try{await savePlanStructure(plan);closeModal();render();}catch(err){alert(err.message);}};
}
async function copyPreviousWeek(weekNo){
  const plan=currentEditorPlan(); if(!plan) return;
  const idx=plan.weeks.findIndex(w=>Number(w.week)===Number(weekNo));
  if(idx<=0) return;
  plan.weeks[idx].sessions=JSON.parse(JSON.stringify(plan.weeks[idx-1].sessions||[]));
  try{await savePlanStructure(plan);render();}catch(err){alert(err.message);}
}
function openBuildPlanModal(){
  showModal(`<div class="eyebrow">Build a plan</div><h3>Set up your plan</h3>
    <p class="muted">RunPlan will create the week structure. You can then add each session directly in the editor.</p>
    <label>Plan / race name<input id="bpName" placeholder="e.g. London Marathon"></label>
    <label>Race date<input id="bpRace" type="date"></label>
    <label>Target time<input id="bpTarget" type="time" step="1" value="03:59:59"></label>
    <label>Plan length (weeks)<input id="bpWeeks" type="number" min="1" max="52" value="16"></label>
    <div class="builder-note">Weeks are created backwards from race week. Sessions are left blank so RunPlan doesn't make assumptions about your training.</div>
    <div class="modal-actions"><button class="secondary-btn" id="bpBack" type="button">Back</button><button class="primary-btn" id="bpCreate" type="button">Create & edit</button></div>`);
  document.getElementById("bpBack").onclick=()=>{closeModal();openNewPlanModal();};
  document.getElementById("bpCreate").onclick=async()=>{
    const name=document.getElementById("bpName").value.trim();
    const raceDate=document.getElementById("bpRace").value;
    const target=document.getElementById("bpTarget").value||"03:59:59";
    const count=Math.max(1,Math.min(52,Number(document.getElementById("bpWeeks").value)||0));
    if(!name||!raceDate||!count) return alert("Add a plan name, race date and plan length.");
    const weeks=buildWeekSkeleton(raceDate,count);
    const payload={user_id:state.user.id,name,race_date:raceDate,target_time:target,start_date:weeks[0].start,notes:"",plan_data:{weeks},archived:false};
    const {data,error}=await supabaseClient.from("plans").insert(payload).select().single();
    if(error) return alert(error.message);
    await persistSettings({currentPlanId:data.id});
    closeModal();await loadCloudState();state.editingPlan=true;switchView("planView");render();
  };
}

function render(){
  applyBackground();
  const plan=currentPlan();

  if(!plan){
    els.currentPlanName.textContent="No plan yet";
    els.planMeta.textContent="Create or import your first plan";
    els.planViewTitle.textContent="Training plans";
    els.planWeeks.innerHTML=`<div class="empty-plan-card"><div class="eyebrow">Get started</div><h2>Add your first plan</h2><p>Build a plan directly in RunPlan or import an existing JSON plan.</p><button id="emptyAddPlan" class="primary-btn full" type="button">Add new plan</button></div>`;
    els.sessionList.innerHTML=`<div class="empty-plan-card"><div class="eyebrow">No active plan</div><h2>Your training will appear here</h2><p>Once you add a plan, this screen will show your current week, sessions and progress.</p></div>`;
    els.weekEyebrow.textContent="Training";
    els.weekPlannedDistance.textContent="—";
    els.weekHeadline.textContent="No active plan";
    els.weekDates.textContent="";
    els.weeklyProgressText.textContent="0 / 0 km";
    els.weeklyProgressBar.style.width="0%";
    els.runsMetric.textContent="0 / 0";
    els.longMetric.textContent="—";
    els.targetMetric.textContent="—";
    els.remainingCount.textContent="";
    els.raceTargetLarge.textContent="—";
    els.marathonPaceText.textContent="Add a race target";
    els.paceGrid.innerHTML="";
    els.logSession.innerHTML="<option>No sessions available</option>";
    els.logSession.disabled=true;
    renderProgress();
    renderShoes();
    document.getElementById("emptyAddPlan")?.addEventListener("click",openNewPlanModal);
    return;
  }

  els.logSession.disabled=false;
  els.currentPlanName.textContent=plan.name;
  const raceDateLabel=parseDate(plan.raceDate).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});
  const daysRemaining=Math.max(0,Math.ceil((parseDate(plan.raceDate)-new Date())/86400000));
  els.planMeta.textContent=`${raceDateLabel} · ${daysRemaining} days to go`;

  const week=getCurrentWeek(plan);
  if(!week){
    els.sessionList.innerHTML=`<div class="empty-plan-card"><div class="eyebrow">Plan ready</div><h2>Add your sessions</h2><p>Open the Plan tab and choose Edit plan to build the schedule, or import a complete plan instead.</p></div>`;
    els.weekEyebrow.textContent="Plan";
    els.weekPlannedDistance.textContent="—";
    els.weekHeadline.textContent="Awaiting sessions";
    els.weekDates.textContent="";
    els.weeklyProgressText.textContent="0 / 0 km";
    els.weeklyProgressBar.style.width="0%";
    els.runsMetric.textContent="0 / 0";
    els.longMetric.textContent="—";
    els.remainingCount.textContent="";
  } else {
    const completed=completedForWeek(plan,week);
    const total=week.sessions.length;
    const logged=loggedDistanceForWeek(plan,week);
    const planned=plannedDistanceForWeek(week);
    els.weekEyebrow.textContent=`Week ${week.week} of ${plan.weeks.length}`;
    els.weekPlannedDistance.textContent=planned ? `${planned.toFixed(1)} km` : `${total} runs`;
    els.weekHeadline.textContent=week.label || "Training week";
    els.weekDates.textContent=formatDateRange(week);
    els.weeklyProgressText.textContent=`${logged.toFixed(1)} / ${planned ? planned.toFixed(1) : "—"} km`;
    els.weeklyProgressBar.style.width=planned?`${Math.min(100,(logged/planned)*100)}%`:`${Math.min(100,(completed/total)*100)}%`;
    els.runsMetric.textContent=`${completed} / ${total}`;
    const long=week.sessions.find(s=>(s.type||"").toLowerCase().includes("long"));
    els.longMetric.textContent=long?.distanceKm?`${long.distanceKm} km`:"—";
    els.remainingCount.textContent=`${Math.max(0,total-completed)} remaining`;
    els.sessionList.innerHTML=week.sessions.map((s,i)=>{
      const log=logFor(plan,week,i);
      const descriptor=s.distanceKm?`${s.distanceKm} km`:s.durationMin?`${s.durationMin} min`:"Session";
      const dated=s.day||s.date ? ` · ${s.day||s.date}` : "";
      return `<button class="session-card ${sessionClass(s.type)}" data-session="${i}">
        <span class="session-icon">${iconFor(s.type)}</span>
        <span class="session-main">
          <span class="session-title-row">
            <span class="session-title">${s.type}</span>
            <span class="session-status">${log?"Completed ✓":descriptor}</span>
          </span>
          <span class="session-meta">${descriptor}${dated}</span>
          <span class="session-desc">${s.instructions}</span>
        </span>
      </button>`;
    }).join("");
  }

  els.targetMetric.textContent=plan.targetTime.slice(0,5).replace(/^0/,"");
  const p=derivePaces(plan);
  els.raceTargetLarge.textContent=plan.targetTime.replace(/^0/,"");
  const mp=targetSeconds(plan.targetTime)/42.195;
  els.marathonPaceText.textContent=`${paceString(mp)} marathon pace`;
  els.paceGrid.innerHTML=[
    ["Easy",p.easy],["Recovery",p.recovery],["Steady",p.steady],
    ["Threshold",p.threshold],["Interval",p.interval],["Marathon",p.marathon]
  ].map(([a,b])=>`<div class="pace-cell"><span>${a}</span><strong>${b}</strong></div>`).join("");

  els.planViewTitle.textContent=`${plan.weeks.length || 0}-week plan`;
  els.editPlanBtn.textContent=state.editingPlan?"Done editing":"Edit plan";
  if(state.editingPlan){
    renderPlanEditor(plan);
  } else {
    els.planWeeks.innerHTML=plan.weeks.length ? plan.weeks.map(w=>`<details class="week-card">
      <summary class="week-summary">
        <div><strong>Week ${w.week}</strong><span>${w.label||""}</span></div>
        <div style="text-align:right"><strong>${plannedDistanceForWeek(w)?plannedDistanceForWeek(w).toFixed(0)+" km":"—"}</strong><span>${formatDateRange(w)}</span></div>
      </summary>
      <div class="week-sessions">
        ${w.sessions.length?w.sessions.map(s=>`<div class="mini-session"><strong>${s.type}</strong> · ${s.distanceKm?`${s.distanceKm} km`:s.durationMin?`${s.durationMin} min`:""}${s.day?` · ${s.day}`:""}<br><span class="muted">${s.instructions}</span></div>`).join(""):`<div class="muted" style="font-size:12px">No sessions added.</div>`}
      </div>
    </details>`).join("") : `<div class="empty-plan-card"><div class="eyebrow">Plan structure</div><h2>No weeks yet</h2><p>Build a new plan to create its week structure, or import a complete JSON plan.</p></div>`;
  }

  renderLogSessionOptions();
  renderProgress();
  renderShoes();
}
function renderLogSessionOptions(){
  const plan=currentPlan(), week=getCurrentWeek(plan);
  if(!plan||!week){ els.logSession.innerHTML="<option>No sessions available</option>"; return; }
  els.logSession.innerHTML=week.sessions.map((s,i)=>`<option value="${sessionKey(plan,week,i)}">${s.type}${s.distanceKm?` · ${s.distanceKm} km`:s.durationMin?` · ${s.durationMin} min`:""}</option>`).join("");
  els.logDate.value=els.logDate.value||todayIso();
}
function renderShoes(){
  els.logShoe.innerHTML=state.shoes.filter(s=>s.active!==false).map(s=>`<option value="${s.id}">${s.name}</option>`).join("");
}
function renderProgress(){
  const plan=currentPlan();
  const logs=plan ? state.logs.filter(l=>l.planId===plan.id) : [];
  const totalDist=logs.reduce((a,l)=>a+(l.distanceKm||0),0);
  const totalSec=logs.reduce((a,l)=>a+(l.durationSec||0),0);
  const rpes=logs.map(l=>l.rpe).filter(Boolean);
  els.statRuns.textContent=logs.length;
  els.statDistance.textContent=`${totalDist.toFixed(1)} km`;
  els.statPace.textContent=totalDist&&totalSec?paceString(totalSec/totalDist):"—";
  els.statRpe.textContent=rpes.length?(rpes.reduce((a,b)=>a+b,0)/rpes.length).toFixed(1):"—";
  if(!plan){ els.mileageChart.innerHTML=""; els.recentRuns.innerHTML=`<div class="muted">No runs logged yet.</div>`; return; }
  const vals=plan.weeks.map(w=>loggedDistanceForWeek(plan,w));
  const max=Math.max(1,...vals);
  els.mileageChart.innerHTML=vals.map((v,i)=>`<div class="bar-col"><div class="bar" style="height:${Math.max(3,(v/max)*130)}px"></div><span>W${i+1}</span></div>`).join("");
  els.recentRuns.innerHTML=logs.length?logs.slice().sort((a,b)=>b.date.localeCompare(a.date)).slice(0,8).map(l=>`<div class="recent-row"><div><strong>${l.sessionType}</strong><br><span class="muted">${l.date}</span></div><div style="text-align:right"><strong>${l.distanceKm.toFixed(2)} km</strong><br><span class="muted">${l.pace}</span></div></div>`).join(""):`<div class="muted">No runs logged yet.</div>`;
}


function renderCoachView(){
  if(!els.coachClientsPanel || !els.coachTemplatesPanel) return;
  if(!isCoach()){
    els.coachClientsPanel.innerHTML="";
    els.coachTemplatesPanel.innerHTML="";
    return;
  }
  if(state.selectedCoachClientId){
    renderCoachClientDetail(state.selectedCoachClientId);
    return;
  }
  els.coachEditorPanel.classList.add("hidden");
  els.coachClientsPanel.classList.remove("hidden");
  els.coachClientsPanel.innerHTML=`<div class="coach-grid">
    ${state.coachClients.length?state.coachClients.map(c=>`<article class="coach-card">
      <div class="coach-card-head"><div><h3>${c.email}</h3><p>Connected athlete</p></div><span class="status-pill">Active</span></div>
      <div class="coach-card-actions"><button class="secondary-btn compact open-client-btn" data-client="${c.id}" type="button">View client</button></div>
    </article>`).join(""):`<div class="empty-plan-card"><div class="eyebrow">Clients</div><h2>No clients yet</h2><p>Invite an athlete by email. They must accept the connection before you can view their training.</p></div>`}
    ${state.coachInvites.length?`<div><div class="eyebrow" style="margin:8px 0">Pending invitations</div>${state.coachInvites.map(i=>`<div class="invite-row"><strong>${i.athlete_email}</strong><div class="muted" style="font-size:11px;margin-top:3px">Waiting for athlete to accept</div></div>`).join("")}</div>`:""}
  </div>`;
  document.querySelectorAll(".open-client-btn").forEach(b=>b.onclick=()=>openCoachClient(b.dataset.client));

  els.coachTemplatesPanel.innerHTML=`<div class="section-heading compact-head"><div><div class="eyebrow">Library</div><h3>Plan templates</h3></div><button id="newTemplateBtn" class="primary-btn compact" type="button">New template</button></div>
    <div class="coach-grid">${state.coachTemplates.length?state.coachTemplates.map(t=>`<article class="coach-card">
      <div class="coach-card-head"><div><h3>${t.name}</h3><p>${t.weeks.length} weeks · reusable template</p></div><span class="status-pill">Template</span></div>
      <div class="coach-card-actions"><button class="secondary-btn compact edit-template-btn" data-template="${t.id}" type="button">Edit</button></div>
    </article>`).join(""):`<div class="empty-plan-card"><div class="eyebrow">Templates</div><h2>Build reusable plans</h2><p>Create a template once, then assign an athlete-specific copy to any connected client.</p></div>`}</div>`;
  document.getElementById("newTemplateBtn")?.addEventListener("click",openNewTemplateModal);
  document.querySelectorAll(".edit-template-btn").forEach(b=>b.onclick=()=>openCoachPlanEditor(b.dataset.template,true));
}
async function openCoachClient(clientId){
  state.selectedCoachClientId=clientId;
  const [plansRes,logsRes]=await Promise.all([
    supabaseClient.from("plans").select("*").eq("user_id",clientId).eq("coach_id",state.user.id).eq("is_template",false).order("created_at",{ascending:false}),
    supabaseClient.from("run_logs").select("*").eq("user_id",clientId).order("run_date",{ascending:false}).limit(50)
  ]);
  if(plansRes.error) return alert(plansRes.error.message);
  if(logsRes.error) return alert(logsRes.error.message);
  state.coachClientPlans=(plansRes.data||[]).map(mapPlanRow);
  state.coachClientLogs=(logsRes.data||[]).map(l=>({id:l.id,planId:l.plan_id,sessionType:l.session_type,date:l.run_date,distanceKm:Number(l.distance_km),durationSec:l.duration_seconds,avgHr:l.average_hr,rpe:l.rpe,notes:l.notes||""}));
  renderCoachClientDetail(clientId);
}
function renderCoachClientDetail(clientId){
  const client=state.coachClients.find(c=>c.id===clientId);
  if(!client) { state.selectedCoachClientId=null; return renderCoachView(); }
  const totalKm=state.coachClientLogs.reduce((a,l)=>a+l.distanceKm,0);
  const recent=state.coachClientLogs.slice(0,5);
  els.coachClientsPanel.classList.remove("hidden");
  els.coachTemplatesPanel.classList.add("hidden");
  els.coachEditorPanel.classList.add("hidden");
  els.coachClientsPanel.innerHTML=`<div class="client-detail-head"><div><button id="backClientsBtn" class="back-link" type="button">← Clients</button><h2 style="margin:8px 0 0">${client.email}</h2></div><button id="assignPlanBtn" class="primary-btn compact" type="button">Assign plan</button></div>
    <div class="client-summary">
      <div class="client-stat"><span>Plans</span><strong>${state.coachClientPlans.length}</strong></div>
      <div class="client-stat"><span>Logged runs</span><strong>${state.coachClientLogs.length}</strong></div>
      <div class="client-stat"><span>Distance</span><strong>${totalKm.toFixed(0)} km</strong></div>
    </div>
    <div class="eyebrow" style="margin:20px 0 8px">Assigned plans</div>
    <div class="coach-grid">${state.coachClientPlans.length?state.coachClientPlans.map(p=>`<article class="coach-card">
      <div class="coach-card-head"><div><h3>${p.name}</h3><p>${p.raceDate?parseDate(p.raceDate).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}):""}</p></div><span class="status-pill ${p.publicationStatus==="draft"?"draft":""}">${p.publicationStatus}</span></div>
      <div class="coach-card-actions"><button class="secondary-btn compact edit-client-plan-btn" data-plan="${p.id}" type="button">Edit ${p.publicationStatus==="draft"?"draft":"plan"}</button></div>
    </article>`).join(""):`<div class="muted">No plans assigned yet.</div>`}</div>
    <div class="eyebrow" style="margin:20px 0 8px">Recent training</div>
    <div class="coach-card">${recent.length?recent.map(l=>`<div class="recent-row"><div><strong>${l.sessionType||"Run"}</strong><br><span class="muted">${l.date}${l.notes?` · ${l.notes}`:""}</span></div><div style="text-align:right"><strong>${l.distanceKm.toFixed(1)} km</strong><br><span class="muted">${l.rpe?`RPE ${l.rpe}`:""}${l.avgHr?` · ${l.avgHr} bpm`:""}</span></div></div>`).join(""):`<div class="muted">No runs logged yet.</div>`}</div>`;
  document.getElementById("backClientsBtn").onclick=()=>{state.selectedCoachClientId=null;renderCoachView();};
  document.getElementById("assignPlanBtn").onclick=()=>openAssignPlanModal(clientId);
  document.querySelectorAll(".edit-client-plan-btn").forEach(b=>b.onclick=()=>openCoachPlanEditor(b.dataset.plan,false));
}
function openNewTemplateModal(){
  showModal(`<div class="eyebrow">Template library</div><h3>New plan template</h3>
    <label>Template name<input id="tplName" placeholder="e.g. 16-week beginner marathon"></label>
    <label>Plan length (weeks)<input id="tplWeeks" type="number" min="1" max="52" value="16"></label>
    <label>Default target time<input id="tplTarget" type="time" step="1" value="04:00:00"></label>
    <div class="modal-actions"><button class="secondary-btn" id="tplCancel">Cancel</button><button class="primary-btn" id="tplCreate">Create & edit</button></div>`);
  document.getElementById("tplCancel").onclick=closeModal;
  document.getElementById("tplCreate").onclick=async()=>{
    const name=document.getElementById("tplName").value.trim();
    const count=Math.max(1,Math.min(52,Number(document.getElementById("tplWeeks").value)||0));
    if(!name||!count) return alert("Add a template name and length.");
    const weeks=Array.from({length:count},(_,i)=>({week:i+1,label:"",sessions:[]}));
    const payload={user_id:state.user.id,name,race_date:null,target_time:document.getElementById("tplTarget").value||"04:00:00",start_date:null,notes:"",plan_data:{weeks},draft_plan_data:{weeks},archived:false,is_template:true,publication_status:"draft"};
    const {data,error}=await supabaseClient.from("plans").insert(payload).select().single();
    if(error) return alert(error.message);
    closeModal(); await loadCloudState(); await openCoachPlanEditor(data.id,true);
  };
}
async function openCoachPlanEditor(planId,isTemplate){
  let source=isTemplate?state.coachTemplates.find(p=>p.id===planId):state.coachClientPlans.find(p=>p.id===planId);
  if(!source){
    const {data,error}=await supabaseClient.from("plans").select("*").eq("id",planId).single();
    if(error) return alert(error.message);
    source=mapPlanRow(data);
  }
  state.coachEditingPlan=JSON.parse(JSON.stringify(source));
  state.coachEditingPlan.weeks=source.draftWeeks.length?JSON.parse(JSON.stringify(source.draftWeeks)):JSON.parse(JSON.stringify(source.weeks||[]));
  renderCoachPlanEditor();
}
function renderCoachPlanEditor(){
  const p=state.coachEditingPlan;
  if(!p) return;
  els.coachClientsPanel.classList.add("hidden");
  els.coachTemplatesPanel.classList.add("hidden");
  els.coachEditorPanel.classList.remove("hidden");
  els.coachEditorPanel.innerHTML=`<div class="coach-editor-top"><div><button id="closeCoachEditor" class="back-link" type="button">← Back</button><h3>${p.name}</h3><div class="muted" style="font-size:12px">${p.isTemplate?"Template":`${p.publicationStatus==="draft"?"Draft plan":"Published plan"}`}</div></div>${!p.isTemplate?`<button id="publishCoachPlan" class="primary-btn compact" type="button">Publish changes</button>`:""}</div>
    ${!p.isTemplate?`<div class="publish-bar"><p>Edits are saved as a draft. Your athlete only sees them when you publish.</p><span class="status-pill ${p.publicationStatus==="draft"?"draft":""}">${p.publicationStatus}</span></div>`:""}
    <div>${p.weeks.map((w,wi)=>`<section class="coach-week">
      <div class="coach-week-head"><div><strong>Week ${w.week}</strong><div class="muted" style="font-size:11px">${w.start&&w.end?formatDateRange(w):"Relative week"}</div></div><button class="secondary-btn compact coach-add-session" data-week="${w.week}" type="button">+ Session</button></div>
      ${w.sessions?.length?w.sessions.map((s,si)=>`<div class="coach-session"><div><strong>${s.type}</strong><div class="muted">${sessionSummary(s)} · ${s.instructions}</div></div><button class="secondary-btn compact coach-edit-session" data-week="${w.week}" data-session="${si}" type="button">Edit</button></div>`).join(""):`<div class="muted" style="font-size:12px">No sessions yet.</div>`}
    </section>`).join("")}</div>`;
  document.getElementById("closeCoachEditor").onclick=()=>{state.coachEditingPlan=null;if(state.selectedCoachClientId)renderCoachClientDetail(state.selectedCoachClientId);else renderCoachView();};
  document.querySelectorAll(".coach-add-session").forEach(b=>b.onclick=()=>openCoachSessionEditor(Number(b.dataset.week)));
  document.querySelectorAll(".coach-edit-session").forEach(b=>b.onclick=()=>openCoachSessionEditor(Number(b.dataset.week),Number(b.dataset.session)));
  document.getElementById("publishCoachPlan")?.addEventListener("click",publishCoachPlan);
}
function openCoachSessionEditor(weekNo,sessionIndex=null){
  const p=state.coachEditingPlan,week=p?.weeks.find(w=>Number(w.week)===Number(weekNo));
  if(!p||!week) return;
  const existing=sessionIndex===null?null:week.sessions[sessionIndex];
  showModal(`<div class="eyebrow">Week ${week.week}</div><h3>${existing?"Edit session":"Add session"}</h3>
    <label>Session type<input id="cseType" value="${existing?.type||""}" placeholder="e.g. Easy"></label>
    <div class="two-col"><label>Distance (km)<input id="cseDistance" type="number" min="0" step="0.1" value="${existing?.distanceKm??""}"></label><label>Duration (min)<input id="cseDuration" type="number" min="0" value="${existing?.durationMin??""}"></label></div>
    <div class="two-col"><label>Day<input id="cseDay" value="${existing?.day||""}" placeholder="Optional"></label><label>Date<input id="cseDate" type="date" value="${existing?.date||""}"></label></div>
    <label>Instructions<textarea id="cseInstructions" rows="4">${existing?.instructions||""}</textarea></label>
    <div class="modal-actions">${existing?`<button class="secondary-btn" id="cseDelete" type="button">Delete</button>`:""}<button class="secondary-btn" id="cseCancel" type="button">Cancel</button><button class="primary-btn" id="cseSave" type="button">Save</button></div>`);
  document.getElementById("cseCancel").onclick=closeModal;
  document.getElementById("cseDelete")?.addEventListener("click",async()=>{week.sessions.splice(sessionIndex,1);await saveCoachDraft();closeModal();renderCoachPlanEditor();});
  document.getElementById("cseSave").onclick=async()=>{
    const type=document.getElementById("cseType").value.trim(),instructions=document.getElementById("cseInstructions").value.trim();
    if(!type||!instructions) return alert("Add a session type and instructions.");
    const s={type,instructions},dist=Number(document.getElementById("cseDistance").value),dur=Number(document.getElementById("cseDuration").value),day=document.getElementById("cseDay").value.trim(),date=document.getElementById("cseDate").value;
    if(dist>0)s.distanceKm=dist;if(dur>0)s.durationMin=dur;if(day)s.day=day;if(date)s.date=date;
    if(existing)week.sessions[sessionIndex]=s;else week.sessions.push(s);
    await saveCoachDraft();closeModal();renderCoachPlanEditor();
  };
}
async function saveCoachDraft(){
  const p=state.coachEditingPlan;
  const {error}=await supabaseClient.from("plans").update({draft_plan_data:{weeks:p.weeks}}).eq("id",p.id);
  if(error) throw error;
}
async function publishCoachPlan(){
  const p=state.coachEditingPlan;
  const {error}=await supabaseClient.from("plans").update({plan_data:{weeks:p.weeks},draft_plan_data:{weeks:p.weeks},publication_status:"published",start_date:p.weeks?.[0]?.start||p.startDate}).eq("id",p.id);
  if(error) return alert(error.message);
  p.publicationStatus="published";
  await openCoachClient(state.selectedCoachClientId);
  state.coachEditingPlan=null;
}
function openAssignPlanModal(clientId){
  if(!state.coachTemplates.length){
    return showModal(`<h3>No templates yet</h3><p>Create a reusable template first, then assign it to this athlete.</p><div class="modal-actions"><button class="secondary-btn" id="noTplClose">Close</button><button class="primary-btn" id="noTplCreate">Create template</button></div>`);
  }
  showModal(`<div class="eyebrow">Assign plan</div><h3>Create athlete plan</h3>
    <label>Template<select id="assignTemplate">${state.coachTemplates.map(t=>`<option value="${t.id}">${t.name}</option>`).join("")}</select></label>
    <label>Plan / race name<input id="assignName" placeholder="e.g. Manchester Marathon"></label>
    <label>Race date<input id="assignRace" type="date"></label>
    <label>Target time<input id="assignTarget" type="time" step="1" value="04:00:00"></label>
    <div class="builder-note">RunPlan creates an athlete-specific copy. Future edits to the template will not alter this athlete's plan.</div>
    <div class="modal-actions"><button class="secondary-btn" id="assignCancel">Cancel</button><button class="primary-btn" id="assignCreate">Create draft</button></div>`);
  document.getElementById("assignCancel").onclick=closeModal;
  document.getElementById("assignCreate").onclick=async()=>{
    const tpl=state.coachTemplates.find(t=>t.id===document.getElementById("assignTemplate").value);
    const name=document.getElementById("assignName").value.trim(),race=document.getElementById("assignRace").value,target=document.getElementById("assignTarget").value||tpl.targetTime;
    if(!tpl||!name||!race) return alert("Choose a template and add the race details.");
    const skeleton=buildWeekSkeleton(race,tpl.weeks.length);
    skeleton.forEach((w,i)=>{w.label=tpl.weeks[i]?.label||"";w.sessions=JSON.parse(JSON.stringify(tpl.weeks[i]?.sessions||[]));});
    const payload={user_id:clientId,coach_id:state.user.id,name,race_date:race,target_time:target,start_date:skeleton[0]?.start||race,notes:"",plan_data:{weeks:[]},draft_plan_data:{weeks:skeleton},archived:false,is_template:false,publication_status:"draft"};
    const {data,error}=await supabaseClient.from("plans").insert(payload).select().single();
    if(error) return alert(error.message);
    closeModal();await openCoachClient(clientId);await openCoachPlanEditor(data.id,false);
  };
  document.getElementById("noTplClose")?.addEventListener("click",closeModal);
  document.getElementById("noTplCreate")?.addEventListener("click",()=>{closeModal();openNewTemplateModal();});
}

function switchView(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===id));
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===id));
  if(id==="coachView") renderCoachView();
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>switchView(b.dataset.view)));


document.querySelectorAll(".coach-tab").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".coach-tab").forEach(x=>x.classList.toggle("active",x===b));
  const tab=b.dataset.coachTab;
  state.selectedCoachClientId=null;
  state.coachEditingPlan=null;
  els.coachClientsPanel.classList.toggle("hidden",tab!=="clients");
  els.coachTemplatesPanel.classList.toggle("hidden",tab!=="templates");
  els.coachEditorPanel.classList.add("hidden");
  renderCoachView();
  if(tab==="templates"){els.coachClientsPanel.classList.add("hidden");els.coachTemplatesPanel.classList.remove("hidden");}
}));
els.inviteClientBtn?.addEventListener("click",()=>{
  showModal(`<div class="eyebrow">New client</div><h3>Invite athlete</h3><p class="muted">The athlete must accept before you can see their training.</p>
    <label>Athlete email<input id="inviteEmail" type="email" placeholder="athlete@example.com"></label>
    <div class="modal-actions"><button class="secondary-btn" id="inviteCancel">Cancel</button><button class="primary-btn" id="inviteSend">Send invite</button></div>`);
  document.getElementById("inviteCancel").onclick=closeModal;
  document.getElementById("inviteSend").onclick=async()=>{
    const email=document.getElementById("inviteEmail").value.trim().toLowerCase();if(!email)return;
    const {error}=await supabaseClient.from("coach_invites").insert({coach_id:state.user.id,athlete_email:email,status:"pending"});
    if(error) return alert(error.message);
    closeModal();await loadCoachData();renderCoachView();
  };
});
els.coachInvitesBtn?.addEventListener("click",()=>{
  showModal(`<div class="eyebrow">Coach invitations</div><h3>Pending invitations</h3>
    <div class="invite-list">${state.coachInvites.length?state.coachInvites.map(i=>`<div class="invite-row"><strong>${i.profiles?.email||"Coach invitation"}</strong><div class="muted" style="font-size:11px;margin-top:3px">A coach wants to connect with your RunPlan account.</div><div class="coach-card-actions"><button class="secondary-btn reject-invite" data-id="${i.id}" type="button">Decline</button><button class="primary-btn accept-invite" data-id="${i.id}" data-coach="${i.coach_id}" type="button">Accept</button></div></div>`).join(""):`<div class="muted">No pending invitations.</div>`}</div>
    <div class="modal-actions"><button class="secondary-btn" id="invitesClose">Close</button></div>`);
  document.getElementById("invitesClose").onclick=closeModal;
  document.querySelectorAll(".accept-invite").forEach(b=>b.onclick=async()=>{
    const {error}=await supabaseClient.from("coach_clients").insert({coach_id:b.dataset.coach,athlete_id:state.user.id,status:"accepted"});
    if(error) return alert(error.message);
    await supabaseClient.from("coach_invites").update({status:"accepted"}).eq("id",b.dataset.id);
    closeModal();await loadCloudState();
  });
  document.querySelectorAll(".reject-invite").forEach(b=>b.onclick=async()=>{
    await supabaseClient.from("coach_invites").update({status:"declined"}).eq("id",b.dataset.id);
    closeModal();await loadCloudState();
  });
});

els.authForm.addEventListener("submit",async e=>{
  e.preventDefault();
  const email=els.authEmail.value.trim();
  if(!email) return;
  showAuthMessage("Sending magic link...");
  const {error}=await supabaseClient.auth.signInWithOtp({
    email,
    options:{emailRedirectTo:"https://dan-r-jacob.github.io/runplan/",shouldCreateUser:true}
  });
  if(error) return showAuthMessage(error.message,"error");
  showAuthMessage("Magic link sent. Check your email and open the link on this device.","success");
});

supabaseClient.auth.onAuthStateChange(async(event,session)=>{
  state.user=session?.user||null;
  setAuthenticatedUi(!!state.user);
  if(state.user){
    showAuthMessage("");
    try{ await loadCloudState(); }catch(err){ console.error(err); alert(`Could not load RunPlan data: ${err.message}`); }
  } else {
    state.plans=[]; state.logs=[]; state.shoes=[]; state.currentPlanId=null;
  }
});

els.logDistance.addEventListener("input",()=>els.calculatedPace.textContent=calcPace(els.logDistance.value,els.logDuration.value));
els.logDuration.addEventListener("input",()=>els.calculatedPace.textContent=calcPace(els.logDistance.value,els.logDuration.value));

els.runLogForm.addEventListener("submit",async e=>{
  e.preventDefault();
  const plan=currentPlan();
  if(!plan) return;
  const key=els.logSession.value;
  const parts=key.split("|");
  const weekNo=Number(parts[1]), idx=Number(parts[2]);
  const week=plan.weeks.find(w=>w.week===weekNo);
  const s=week.sessions[idx];
  const dist=Number(els.logDistance.value), dur=durationToSeconds(els.logDuration.value);
  const existing=state.logs.find(l=>l.sessionKey===key);
  const payload={
    user_id:state.user.id, plan_id:plan.id, session_key:key, week_number:weekNo, session_index:idx,
    session_type:s.type, run_date:els.logDate.value, distance_km:dist, duration_seconds:dur,
    average_hr:Number(els.logHr.value)||null, rpe:Number(els.logRpe.value)||null,
    shoe_id:els.logShoe.value||null, notes:els.logNotes.value.trim()
  };
  let result;
  if(existing) result=await supabaseClient.from("run_logs").update(payload).eq("id",existing.id).select().single();
  else result=await supabaseClient.from("run_logs").insert(payload).select().single();
  if(result.error) return alert(result.error.message);
  await loadCloudState();
  switchView("homeView");
  els.runLogForm.reset(); els.logDate.value=todayIso(); els.calculatedPace.textContent="—";
});

function showModal(html){
  els.modalContent.innerHTML=`<div class="modal-shell">${html}</div>`;
  els.modal.showModal();
}
function closeModal(){ els.modal.close(); }
els.modal.addEventListener("click",e=>{ if(e.target===els.modal) closeModal(); });

els.editTargetBtn.addEventListener("click",()=>{
  const plan=currentPlan(); if(!plan) return;
  showModal(`<div class="eyebrow">Race target</div><h3>Edit target time</h3>
    <label>Target time<input id="targetEdit" type="time" step="1" value="${plan.targetTime}"></label>
    <div class="modal-actions"><button class="secondary-btn" id="cancelModal">Cancel</button><button class="primary-btn" id="saveTarget">Save</button></div>`);
  document.getElementById("cancelModal").onclick=closeModal;
  document.getElementById("saveTarget").onclick=async()=>{
    const target=document.getElementById("targetEdit").value||plan.targetTime;
    const result=plan.coachId
      ? await supabaseClient.rpc("set_managed_plan_target",{p_plan_id:plan.id,p_target_time:target})
      : await supabaseClient.from("plans").update({target_time:target}).eq("id",plan.id);
    if(result.error) return alert(result.error.message);
    closeModal(); await loadCloudState();
  };
});

els.planSwitcher.addEventListener("click",()=>{
  showModal(`<div class="eyebrow">Plans</div><h3>Choose plan</h3>
    <div class="settings-list">${state.plans.length?state.plans.map(p=>`<button class="settings-row choose-plan" data-id="${p.id}"><span>${p.name}</span><span>${p.id===state.currentPlanId?"✓":"›"}</span></button>`).join(""):`<div class="settings-row"><span>No plans yet</span></div>`}</div>
    <div class="modal-actions"><button class="secondary-btn" id="closePlanChooser">Close</button><button class="primary-btn" id="newPlanFromChooser">Add new plan</button></div>`);
  document.getElementById("closePlanChooser").onclick=closeModal;
  document.getElementById("newPlanFromChooser").onclick=()=>{ closeModal(); openNewPlanModal(); };
  document.querySelectorAll(".choose-plan").forEach(b=>b.onclick=async()=>{
    await persistSettings({currentPlanId:b.dataset.id}); state.editingPlan=false; closeModal(); render();
  });
});

function openNewPlanModal(){
  showModal(`<div class="eyebrow">New plan</div><h3>How would you like to create your plan?</h3>
    <div class="action-choice-grid">
      <button id="buildPlanChoice" class="action-choice" type="button"><span><strong>Build a plan</strong><span>Create and edit your training schedule directly in RunPlan.</span></span><b>›</b></button>
      <button id="importJsonPlanChoice" class="action-choice" type="button"><span><strong>Import a plan</strong><span>Upload an existing RunPlan-compatible JSON file.</span></span><b>›</b></button>
    </div>
    <div class="modal-actions"><button class="secondary-btn" id="npCancel">Cancel</button></div>`);
  document.getElementById("npCancel").onclick=closeModal;
  document.getElementById("buildPlanChoice").onclick=()=>{closeModal();openBuildPlanModal();};
  document.getElementById("importJsonPlanChoice").onclick=()=>{closeModal();openImportPlanModal();};
}
els.addPlanBtn.addEventListener("click",openNewPlanModal);
els.editPlanBtn.addEventListener("click",()=>{
  const plan=currentPlan();
  if(!plan) return openNewPlanModal();
  state.editingPlan=!state.editingPlan;
  switchView("planView");
  render();
});

async function importPlanObject(p){
  validatePlan(p);
  const payload={user_id:state.user.id,name:p.name,race_date:p.raceDate,target_time:p.targetTime,start_date:p.startDate||p.weeks?.[0]?.start||p.raceDate,notes:p.notes||"",plan_data:{weeks:p.weeks},archived:false};
  const {data,error}=await supabaseClient.from("plans").insert(payload).select().single();
  if(error) throw error;
  await persistSettings({currentPlanId:data.id});
  await loadCloudState();
  switchView("planView");
  return data;
}
function openImportPlanModal(){
  showModal(`<div class="eyebrow">Import plan</div><h3>Upload training plan JSON</h3><p class="muted">Choose a RunPlan-compatible JSON file. The app validates it before importing anything.</p><div class="import-card"><label>JSON file<input id="planFilePicker" class="file-input" type="file" accept=".json,application/json,text/json"></label><div id="planImportStatus" class="import-status"></div></div><div class="modal-actions"><button class="secondary-btn" id="importCancel" type="button">Cancel</button><button class="primary-btn" id="importConfirm" type="button" disabled>Import plan</button></div>`);
  const picker=document.getElementById("planFilePicker"),status=document.getElementById("planImportStatus"),confirm=document.getElementById("importConfirm"); let parsed=null;
  document.getElementById("importCancel").onclick=closeModal;
  picker.addEventListener("change",async()=>{parsed=null;confirm.disabled=true;status.className="import-status";const file=picker.files?.[0];if(!file){status.textContent="";return;}try{const candidate=JSON.parse(await file.text());validatePlan(candidate);parsed=candidate;status.textContent=`Ready to import: ${candidate.name} · ${candidate.weeks.length} weeks`;status.className="import-status success";confirm.disabled=false;}catch(err){status.textContent=`Import file is not valid: ${err.message}`;status.className="import-status error";}});
  confirm.onclick=async()=>{if(!parsed)return;confirm.disabled=true;status.textContent="Importing...";try{await importPlanObject(parsed);closeModal();showModal(`<h3>Plan imported</h3><p>${parsed.name} has been added to your account.</p><div class="modal-actions"><button class="primary-btn" id="importDone">Done</button></div>`);document.getElementById("importDone").onclick=closeModal;}catch(err){status.textContent=`Import failed: ${err.message}`;status.className="import-status error";confirm.disabled=false;}};
}

function validatePlan(p){
  if(!p||typeof p!=="object") throw new Error("Plan JSON must be an object.");
  if(!p.name||!p.raceDate||!p.targetTime||!Array.isArray(p.weeks)) throw new Error("Plan is missing name, raceDate, targetTime or weeks.");
  p.weeks.forEach((w,wi)=>{
    if(!Array.isArray(w.sessions)) throw new Error(`Week ${wi+1} is missing sessions.`);
    w.sessions.forEach((s,si)=>{
      if(!s.type||!s.instructions) throw new Error(`Week ${wi+1}, session ${si+1} needs type and instructions.`);
    });
  });
  return true;
}
els.importPlanBtn.addEventListener("click",openImportPlanModal);

els.aiPromptBtn.addEventListener("click",()=>{
  showModal(`<div class="eyebrow">AI conversion</div><h3>Plan conversion prompt</h3><p class="muted">Paste this into ChatGPT, Claude or another AI along with your training plan.</p>
  <div class="prompt-box">${schemaPrompt.replaceAll("<","&lt;").replaceAll(">","&gt;")}</div>
  <div class="modal-actions"><button class="primary-btn" id="promptClose">Close</button></div>`);
  document.getElementById("promptClose").onclick=closeModal;
});

els.backgroundStyleBtn.addEventListener("click",()=>{
  showModal(`<div class="eyebrow">Appearance</div><h3>Background style</h3>
    <p class="muted">Choose the visual style used behind the app header. This does not change your training data.</p>
    <div class="theme-grid">
      ${backgroundOptions.map(([id,name,desc])=>`
        <button type="button" class="theme-option ${state.backgroundStyle===id?"selected":""}" data-theme="${id}">
          <div class="theme-thumb theme-${id}"></div>
          <strong>${name}</strong><span>${desc}</span>
        </button>`).join("")}
    </div>
    <div class="modal-actions"><button class="secondary-btn" id="themeClose">Close</button></div>`);
  document.getElementById("themeClose").onclick=closeModal;
  document.querySelectorAll(".theme-option").forEach(b=>b.onclick=async()=>{
    state.backgroundStyle=b.dataset.theme;
    applyBackground();
    document.querySelectorAll(".theme-option").forEach(x=>x.classList.toggle("selected",x.dataset.theme===state.backgroundStyle));
    const {error}=await supabaseClient.from("user_settings").update({background_style:state.backgroundStyle}).eq("user_id",state.user.id);
    if(error) alert(error.message);
  });
});

els.manageShoesBtn.addEventListener("click",()=>{
  showModal(`<div class="eyebrow">Shoes</div><h3>Manage shoes</h3>
    <div id="shoeRows">${state.shoes.map((s,i)=>`<div class="recent-row"><strong>${s.name}</strong>${i?`<button class="secondary-btn delete-shoe" data-id="${s.id}">Remove</button>`:""}</div>`).join("")}</div>
    <label>Add shoe<input id="newShoeName" placeholder="e.g. ASICS Novablast 5"></label>
    <div class="modal-actions"><button class="secondary-btn" id="shoeClose">Close</button><button class="primary-btn" id="shoeAdd">Add</button></div>`);
  document.getElementById("shoeClose").onclick=closeModal;
  document.getElementById("shoeAdd").onclick=async()=>{
    const v=document.getElementById("newShoeName").value.trim(); if(!v) return;
    const {error}=await supabaseClient.from("shoes").insert({user_id:state.user.id,name:v,active:true});
    if(error) return alert(error.message);
    closeModal(); await loadCloudState();
  };
  document.querySelectorAll(".delete-shoe").forEach(b=>b.onclick=async()=>{
    const {error}=await supabaseClient.from("shoes").update({active:false}).eq("id",b.dataset.id);
    if(error) return alert(error.message);
    closeModal(); await loadCloudState();
  });
});

els.exportDataBtn.addEventListener("click",()=>{
  const blob=new Blob([JSON.stringify({plans:state.plans,currentPlanId:state.currentPlanId,logs:state.logs,shoes:state.shoes,backgroundStyle:state.backgroundStyle},null,2)],{type:"application/json"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`runplan-backup-${todayIso()}.json`; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),500);
});
els.importDataBtn.addEventListener("click",()=>{
  showModal(`<h3>Cloud backup import</h3><p>Backup restore to Supabase will be added after the first hosted test. For now, use plan import for training plans.</p><div class="modal-actions"><button class="primary-btn" id="backupClose">Close</button></div>`);
  document.getElementById("backupClose").onclick=closeModal;
});

els.accountBtn.addEventListener("click",()=>{
  showModal(`<div class="eyebrow">Account</div><h3>${state.user?.email||"RunPlan account"}</h3>
    <p class="muted">Account type: <strong>${isCoach()?"Coach":"Athlete"}</strong></p>
    <p class="muted">${isCoach()?"Coach accounts include personal training plus client and template tools.":"Athlete accounts include personal plans, run logging and coach invitations."}</p>
    <div class="modal-actions"><button class="secondary-btn" id="switchRoleBtn">${isCoach()?"Switch to athlete":"Switch to coach"}</button><button class="secondary-btn" id="accountClose">Close</button><button class="primary-btn" id="signOutBtn">Sign out</button></div>`);
  document.getElementById("accountClose").onclick=closeModal;
  document.getElementById("switchRoleBtn").onclick=async()=>{try{await setAccountRole(isCoach()?"athlete":"coach");closeModal();render();}catch(e){alert(e.message);}};
  document.getElementById("signOutBtn").onclick=async()=>{ closeModal(); await supabaseClient.auth.signOut(); };
});

document.addEventListener("click",e=>{
  const card=e.target.closest("[data-session]");
  if(!card) return;
  const plan=currentPlan(), week=getCurrentWeek(plan); if(!plan||!week) return;
  const idx=Number(card.dataset.session), s=week.sessions[idx];
  showModal(`<div class="eyebrow">${s.type}</div><h3>${s.distanceKm?`${s.distanceKm} km`:s.durationMin?`${s.durationMin} min`:"Session"}</h3>
    <p>${s.instructions}</p>
    ${s.day||s.date?`<p class="muted">Scheduled: ${s.day||s.date}</p>`:""}
    <div class="modal-actions"><button class="secondary-btn" id="sessionClose">Close</button><button class="primary-btn" id="sessionLog">Log run</button></div>`);
  document.getElementById("sessionClose").onclick=closeModal;
  document.getElementById("sessionLog").onclick=()=>{ closeModal(); switchView("logView"); els.logSession.value=sessionKey(plan,week,idx); };
});

if("serviceWorker" in navigator){ window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{})); }

(async()=>{
  const {data}=await supabaseClient.auth.getSession();
  state.user=data.session?.user||null;
  setAuthenticatedUi(!!state.user);
  if(state.user){
    try{ await loadCloudState(); }catch(err){ console.error(err); alert(`Could not load RunPlan data: ${err.message}`); }
  }
})();
