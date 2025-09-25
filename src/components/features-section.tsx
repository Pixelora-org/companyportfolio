"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  Target, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Brain
} from "lucide-react"
import { Button } from "@/components/ui/button"

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Purpose-built for product development",
      description: "Designed specifically for modern product teams with workflows that scale.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Designed to move fast",
      description: "Optimized for speed and efficiency. Create tasks in seconds, discuss issues in context.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Crafted to perfection",
      description: "Every detail is thoughtfully designed for the best user experience.",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const aiFeatures = [
    {
      icon: Brain,
      title: "AI-assisted product development",
      description: "Choose from a variety of AI agents and start delegating work, from code generation to other technical tasks.",
      agents: ["Cursor Agent", "Devin Agent", "ChatPRD Agent", "Leela", "Codegen Agent", "Conor"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Made for modern product teams
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Nexa is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.
          </motion.p>
        </motion.div>

        {/* Main Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Artificial intelligence
              </h3>
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-4">
              AI-assisted product development
            </h4>
            <p className="text-lg text-gray-600 mb-8">
              Choose from a variety of AI agents and start delegating work, from code generation to other technical tasks.
            </p>
            
            {/* AI Agents */}
            <div className="flex flex-wrap gap-3 mb-8">
              {aiFeatures[0].agents.map((agent, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-semibold">
                      {agent.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{agent}</span>
                </motion.div>
              ))}
            </div>

            <Button className="bg-black text-white hover:bg-gray-800">
              Learn more
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Product Intelligence */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-900 rounded-3xl p-12 text-white"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Product Intelligence</h3>
            <p className="text-xl text-gray-300 mb-8">
              Streamline your product development workflows with AI assistance for routine, manual tasks.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            <div>
              <h4 className="text-xl font-semibold mb-4">Smart Suggestions</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Smart issue assignment suggestions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Automatic project categorization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Intelligent duplicate detection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Performance insights and recommendations</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-semibold">N</span>
                </div>
                <div>
                  <div className="text-sm font-medium">Mobile App Refactor</div>
                  <div className="text-xs text-gray-400">Slack</div>
                </div>
              </div>
              <div className="text-sm text-gray-300 mb-2">
                Why this assignee was suggested
              </div>
              <div className="text-xs text-gray-400 mb-4">
                This person was the assignee on previous issues related to performance problems in the mobile app launch flow
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Accept suggestion
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
