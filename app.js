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
  loading: false
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
    archived:!!row.archived
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
    const settings=await ensureSettings();
    const [plansRes,shoesRes,logsRes]=await Promise.all([
      supabaseClient.from("plans").select("*").eq("archived",false).order("created_at"),
      ensureDefaultShoe().then(data=>({data,error:null})),
      supabaseClient.from("run_logs").select("*").order("run_date",{ascending:false})
    ]);
    if(plansRes.error) throw plansRes.error;
    if(shoesRes.error) throw shoesRes.error;
    if(logsRes.error) throw logsRes.error;

    state.plans=(plansRes.data||[]).map(mapPlanRow);
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
    render();
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

function render(){
  applyBackground();
  const plan=currentPlan();

  if(!plan){
    els.currentPlanName.textContent="No plan yet";
    els.planMeta.textContent="Create or import your first plan";
    els.planViewTitle.textContent="Training plans";
    els.planWeeks.innerHTML=`<div class="empty-plan-card"><div class="eyebrow">Get started</div><h2>Add your first plan</h2><p>Create a race plan manually or import a JSON plan created from ChatGPT, Claude or another tool.</p><button id="emptyAddPlan" class="primary-btn full" type="button">Add new plan</button></div>`;
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
    els.sessionList.innerHTML=`<div class="empty-plan-card"><div class="eyebrow">Plan ready</div><h2>No sessions imported yet</h2><p>Import the training-plan JSON to populate this race with weeks and workouts.</p><button id="emptyImportPlan" class="primary-btn full" type="button">Import training plan</button></div>`;
    els.weekEyebrow.textContent="Plan";
    els.weekPlannedDistance.textContent="—";
    els.weekHeadline.textContent="Awaiting sessions";
    els.weekDates.textContent="";
    els.weeklyProgressText.textContent="0 / 0 km";
    els.weeklyProgressBar.style.width="0%";
    els.runsMetric.textContent="0 / 0";
    els.longMetric.textContent="—";
    els.remainingCount.textContent="";
    document.getElementById("emptyImportPlan")?.addEventListener("click",()=>els.hiddenPlanFile.click());
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
  els.planWeeks.innerHTML=plan.weeks.length ? plan.weeks.map(w=>`<details class="week-card">
    <summary class="week-summary">
      <div><strong>Week ${w.week}</strong><span>${w.label||""}</span></div>
      <div style="text-align:right"><strong>${plannedDistanceForWeek(w)?plannedDistanceForWeek(w).toFixed(0)+" km":"—"}</strong><span>${formatDateRange(w)}</span></div>
    </summary>
    <div class="week-sessions">
      ${w.sessions.map(s=>`<div class="mini-session"><strong>${s.type}</strong> · ${s.distanceKm?`${s.distanceKm} km`:s.durationMin?`${s.durationMin} min`:""}${s.day?` · ${s.day}`:""}<br><span class="muted">${s.instructions}</span></div>`).join("")}
    </div>
  </details>`).join("") : `<div class="empty-plan-card"><div class="eyebrow">No sessions</div><h2>Import your plan</h2><p>This race exists, but it does not yet contain any training weeks.</p></div>`;

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

function switchView(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===id));
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===id));
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>switchView(b.dataset.view)));

els.authForm.addEventListener("submit",async e=>{
  e.preventDefault();
  showAuthMessage("Signing in…");
  const {error}=await supabaseClient.auth.signInWithPassword({
    email:els.authEmail.value.trim(),
    password:els.authPassword.value
  });
  if(error) showAuthMessage(error.message,"error");
});
els.signUpBtn.addEventListener("click",async()=>{
  showAuthMessage("Creating your account…");
  const {data,error}=await supabaseClient.auth.signUp({
    email:els.authEmail.value.trim(),
    password:els.authPassword.value
  });
  if(error) return showAuthMessage(error.message,"error");
  if(data.session) showAuthMessage("Account created.","success");
  else showAuthMessage("Account created. Check your email to confirm your address, then sign in.","success");
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
    const {error}=await supabaseClient.from("plans").update({target_time:target}).eq("id",plan.id);
    if(error) return alert(error.message);
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
    await persistSettings({currentPlanId:b.dataset.id}); closeModal(); render();
  });
});

function openNewPlanModal(){
  showModal(`<div class="eyebrow">New plan</div><h3>Add a race / plan</h3>
    <label>Plan name<input id="npName" placeholder="e.g. London Marathon"></label>
    <label>Race date<input id="npRace" type="date"></label>
    <label>Target time<input id="npTarget" type="time" step="1" value="03:59:59"></label>
    <div class="modal-actions"><button class="secondary-btn" id="npCancel">Cancel</button><button class="primary-btn" id="npCreate">Create</button></div>`);
  document.getElementById("npCancel").onclick=closeModal;
  document.getElementById("npCreate").onclick=async()=>{
    const name=document.getElementById("npName").value.trim(), raceDate=document.getElementById("npRace").value;
    if(!name||!raceDate) return;
    const payload={
      user_id:state.user.id,name,race_date:raceDate,target_time:document.getElementById("npTarget").value||"03:59:59",
      start_date:raceDate,notes:"",plan_data:{weeks:[]},archived:false
    };
    const {data,error}=await supabaseClient.from("plans").insert(payload).select().single();
    if(error) return alert(error.message);
    await persistSettings({currentPlanId:data.id});
    closeModal(); await loadCloudState(); switchView("planView");
  };
}
els.addPlanBtn.addEventListener("click",openNewPlanModal);

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
els.importPlanBtn.addEventListener("click",()=>els.hiddenPlanFile.click());
els.hiddenPlanFile.addEventListener("change",async()=>{
  const f=els.hiddenPlanFile.files[0]; if(!f) return;
  try{
    const p=JSON.parse(await f.text()); validatePlan(p);
    const payload={
      user_id:state.user.id,name:p.name,race_date:p.raceDate,target_time:p.targetTime,
      start_date:p.startDate||p.weeks?.[0]?.start||p.raceDate,notes:p.notes||"",
      plan_data:{weeks:p.weeks},archived:false
    };
    const {data,error}=await supabaseClient.from("plans").insert(payload).select().single();
    if(error) throw error;
    await persistSettings({currentPlanId:data.id});
    await loadCloudState(); switchView("planView");
    showModal(`<h3>Plan imported</h3><p>${p.name} has been added successfully.</p><div class="modal-actions"><button class="primary-btn" id="okImported">OK</button></div>`);
    document.getElementById("okImported").onclick=closeModal;
  }catch(err){
    showModal(`<h3>Import failed</h3><p>${err.message}</p><div class="modal-actions"><button class="primary-btn" id="errClose">Close</button></div>`);
    document.getElementById("errClose").onclick=closeModal;
  }
  els.hiddenPlanFile.value="";
});

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
    <p class="muted">Your training data is stored in your Supabase account and synced across devices.</p>
    <div class="modal-actions"><button class="secondary-btn" id="accountClose">Close</button><button class="primary-btn" id="signOutBtn">Sign out</button></div>`);
  document.getElementById("accountClose").onclick=closeModal;
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
