//SWAGGER 4 - componentes reutilizables para la documentación

module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                required: ["title"],
                properties:{
                    _id:{
                        type:'string',
                        description:"task identification number is MongoDB ObjectId",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"task title",
                        example:"Comer"
                    },
                    completed:{
                        type:'boolean',
                        description:"Task status",
                        example: true
                    },  
                }
            }
        }
    }
}
