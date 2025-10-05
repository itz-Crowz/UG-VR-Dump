declare const Il2Cpp: any;
declare const console: any;

const assembly4dump = "Assembly-CSharp"

console.log("")
console.log("Goose's Dumper")
console.log("")
console.log("Available assemblies:")
try {
for (const asm of Il2Cpp.domain.assemblies) {
    console.log("Assembly:", asm.name);
}
} catch {
console.error("Could not get assemblies")
}
console.log("")
console.log("Currently dumping:", assembly4dump)

for (const klass of Il2Cpp.domain.assembly(assembly4dump).image.classes) {
console.log("--------------------------------------------------------------------------------------------")
    console.log("Namespace:", klass.namespace);
    console.log("Class:", klass.name);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -")
    for (const field of klass.fields) {
        console.log(
            `Field: ${field.name} | Type: ${field.type.name} | Static: ${field.isStatic}`
        );
    }
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -")

    for (const method of klass.methods) {
        console.log(
            `Method: ${method.name} | Return: ${method.returnType.name} | Params: ${method.parameterCount} | Static: ${method.isStatic}`
        );

        for (let i = 0; i < method.parameterCount; i++) {
            console.log(`   Param ${i}: ${method.parameters[i].type.name}`);
        }
    }
console.log("")
}
