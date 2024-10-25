const pageConfig = {
  // Title for your status page
  title: "Squad.ICU 服务运行状态",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://squad.icu/', label: '官网' },
    { link: 'https://qm.qq.com/q/GIBVo8WPOA', label: 'Q群' },
    { link: 'mailto:madlifer@live.com', label: '邮件联系我', highlight: true },
  ],
}
const workerConfig = {
  kvWriteCooldownMinutes: 3,
  passwordProtection: 'username:password',
  monitors: [
    {
      id: 'website',
      name: 'Squad.ICU | 官网',
      method: 'GET',
      target: 'https://sqaud.icu',
      tooltip: 'This is a tooltip for this monitor',
    },
    {
      id: 'website',
      name: 'Squad.ICU |文件下载服务',
      method: 'GET',
      target: 'https://file.sqaud.icu',
    },
    {
      id: 'porxy-cap-guess',
      name: 'Squad.ICU | RAAS猜点反代',
      method: 'GET',
      target: 'https://mortar.sqaud.icu',
    },
    {
      id: 'mortar',
      name: 'Squad.ICU | 迫击炮计算器',
      method: 'GET',
      target: 'https://mortar.sqaud.icu',
    },
    {
      id: 'test-server-1',
      name: 'Squad.ICU | ①号测试服务器',
      method: 'TCP_PING',
      target: '110.40.78.38:271165',
    },
  ],
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
