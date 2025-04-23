import admin from "firebase-admin"
import '../../../serviceAccountKey.json'
import { snapshot } from "node:test";
import { response } from "express";

export class ProductRepository{

    async connect(){
       
        var serviceAccount = require('../../../serviceAccountKey.json');
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
       
    }
    
    async findAll() {
      try {
        const snapshot = await admin.firestore().collection('Products').get();
    
        const allProducts = snapshot.docs.map(doc => ({
          uid: doc.id,          
          ...doc.data()        
        }));
    
        return allProducts;
    
      } catch (err) {
        console.error(err);
        throw {
          error: new Error("Server temporarily unavailable"),
          status: 500,
        };
      }
    }
    
   

    async createProduct(productData: any) {
        try {
          const docRef = await admin.firestore()
            .collection('Products')
            .add(productData);
      
          return {
            message: 'Produto criado com sucesso.',
            id: docRef.id
          };
        } catch (err) {
          console.error(err);
          throw {
            error: new Error("Erro ao criar produto"),
            status: 500
          };
        }
      }

      
      async updateProduct( updatedData: any, productId: any) {
        try {
          await admin.firestore()
            .collection('Products')
            .doc(productId)
            .update(updatedData);
      
          return { message: 'Produto atualizado com sucesso.' };
        } catch (err) {
          console.error(err);
          throw {
            error: new Error("Erro ao atualizar produto"),
            status: 500
          };
        }
      }

      
      async deleteProduct(productId: string) {
        try {
          await admin.firestore()
            .collection('Products')
            .doc(productId)
            .delete();
      
          return { message: 'Produto deletado com sucesso.' };
        } catch (err) {
          console.error(err);
          throw {
            error: new Error("Erro ao deletar produto"),
            status: 500
          };
        }
      }
      
}