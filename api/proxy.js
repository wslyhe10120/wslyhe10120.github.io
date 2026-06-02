export default async function handler(req, res) {
    // 只允许 POST 请求
    if (req.method !== 'POST') {
        return res.status(405).json({ error: '请使用 POST 请求' });
    }

    // 重要：把下面这行的地址换成你的钉钉 Webhook 完整地址
    const DINGTALK_WEBHOOK = 'https://connector.dingtalk.com/webhook/你的完整地址?access_token=xxx';

    try {
        const response = await fetch(DINGTALK_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: '请求失败：' + error.message });
    }
}
