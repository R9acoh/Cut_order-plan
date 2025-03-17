export default {
  port: process.env.PORT || 3000,
  logLevel: process.env.LOG_LEVEL || 'info',
  materialConstraints: {
    maxRollWidth: 200, // cm
    maxRollLength: 5000, // cm
  },
  app: {
    name: 'Kidswear Cut Order Planning System',
    version: '1.0.0'
  },
  optimization: {
    allowRotation: true,
    minimumEfficiency: 80, // percent
    maxLayoutsPerOrder: 10,
    maxLayoutLength: 300, // Maximum layout length in cm
    minUtilization: 70, // Minimum material utilization percentage
    maxWaste: 15 // Maximum acceptable waste percentage
  },
  system: {
    debug: false,
    logLevel: 'info',
    defaultMaterialId: 'mat-001'
  }
};