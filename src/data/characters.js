import kiraraImg from '../assets/character_kirara.png';
import ainaImg from '../assets/character_aina.png';
import renImg from '../assets/character_ren.png';
import shoImg from '../assets/character_sho.png';
import goroImg from '../assets/character_goro.png';

export const charactersData = [
    {
        id: "aina",
        name: "Aina (アイナ)",
        role: "The Rival (元親友)",
        bio: "キララの元親友であり、現在は売れないモデル。かつては二人で活動していたが、キララに切り捨てられた過去を持つ。",
        motive: "Betrayal/Jealousy",
        secret: "実はキララの裏垢の存在を最初に知った人物。",
        color: "#ff0055",
        image: ainaImg
    },
    {
        id: "ren",
        name: "Ren (レン)",
        role: "The Manager (マネージャー)",
        bio: "キララのマネージャー。24時間365日こき使われている。最近、過労で倒れたばかり。",
        motive: "Blackmail/Freedom",
        secret: "横領の証拠をキララに握られている。",
        color: "#00ffff",
        image: renImg
    },
    {
        id: "sho",
        name: "Sho (ショウ)",
        role: "The Fan (ガチ恋勢)",
        bio: "キララの古参ファン。全ての配信、イベントに参加している。最近のキララの「変わってしまった」態度に不満を持っている。",
        motive: "Rejection",
        secret: "ストーカーまがいの行為をしており、接近禁止命令が出されそうだった。",
        color: "#ffff00",
        image: shoImg
    },
    {
        id: "goro",
        name: "Goro (ゴロー)",
        role: "The Sponsor (怪しい社長)",
        bio: "今回のグランピング企画のスポンサー。IT企業の社長だが、黒い噂が絶えない。",
        motive: "Silencing",
        secret: "キララを広告塔にした詐欺まがいのビジネスを計画していたが、断られそうになっていた。",
        color: "#8800ff",
        image: goroImg
    }
];

export const victimData = {
    id: "kirara",
    name: "Kirara (キララ)",
    role: "The Victim (被害者)",
    image: kiraraImg
};
